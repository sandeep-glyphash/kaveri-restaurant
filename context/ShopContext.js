'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from LocalStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('kaveri_cart');
        const savedWishlist = localStorage.getItem('kaveri_wishlist');

        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
        setIsLoaded(true);
    }, []);

    // Save to LocalStorage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('kaveri_cart', JSON.stringify(cart));
            localStorage.setItem('kaveri_wishlist', JSON.stringify(wishlist));
        }
    }, [cart, wishlist, isLoaded]);

    const addToCart = (item) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === itemId);
            if (existing && existing.quantity === 1) {
                return prev.filter(i => i.id !== itemId);
            }
            return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
        });
    };

    const clearCart = () => setCart([]);

    const toggleWishlist = (item) => {
        setWishlist(prev => {
            if (prev.some(i => i.id === item.id)) {
                return prev.filter(i => i.id !== item.id);
            }
            return [...prev, item];
        });
    };

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistCount = wishlist.length;

    return (
        <ShopContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            wishlist,
            toggleWishlist,
            cartTotal,
            cartCount,
            wishlistCount
        }}>
            {children}
        </ShopContext.Provider>
    );
}

export const useShop = () => useContext(ShopContext);
