'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AdminContext = createContext();

export const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'ashok-nagar', name: 'Ashok Nagar' },
    { id: 'kanke-road', name: 'Kanke Road' },
    { id: 'ratu-road', name: 'Ratu Road' }
];

const MOCK_USERS = [
    { email: 'super@kaveri.com', password: 'admin', name: 'Super Admin', role: 'SUPER_ADMIN', access: 'all' },
    { email: 'ashok@kaveri.com', password: 'admin', name: 'Ashok Nagar Mixologist', role: 'OUTLET_ADMIN', access: 'ashok-nagar' },
    { email: 'kanke@kaveri.com', password: 'admin', name: 'Kanke Manager', role: 'OUTLET_ADMIN', access: 'kanke-road' },
    { email: 'ratu@kaveri.com', password: 'admin', name: 'Ratu Road Head', role: 'OUTLET_ADMIN', access: 'ratu-road' }
];

export function AdminProvider({ children }) {
    const [user, setUser] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('all');
    const router = useRouter();

    useEffect(() => {
        // Hydrate from storage on mount
        const storedUser = localStorage.getItem('adminUser');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);

            // Enforce location restriction
            if (parsedUser.role === 'OUTLET_ADMIN') {
                setSelectedLocation(parsedUser.access);
            } else {
                const storedLoc = localStorage.getItem('adminLocation');
                if (storedLoc) setSelectedLocation(storedLoc);
            }
        }
    }, []);

    const login = (email, password) => {
        const found = MOCK_USERS.find(u => u.email === email && u.password === password);
        if (found) {
            setUser(found);
            localStorage.setItem('adminUser', JSON.stringify(found));

            if (found.role === 'OUTLET_ADMIN') {
                setSelectedLocation(found.access);
                localStorage.setItem('adminLocation', found.access);
            } else {
                // Default Super Admin to 'all' if no preference
                setSelectedLocation('all');
            }
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('adminUser');
        localStorage.removeItem('adminLocation');
        router.push('/admin/login');
    };

    const changeLocation = (id) => {
        if (user?.role === 'OUTLET_ADMIN' && id !== user.access) {
            console.warn("Unauthorized location switch attempt");
            return;
        }
        setSelectedLocation(id);
        localStorage.setItem('adminLocation', id);
    };

    return (
        <AdminContext.Provider value={{
            user,
            login,
            logout,
            selectedLocation,
            changeLocation,
            locations
        }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    return useContext(AdminContext);
}
