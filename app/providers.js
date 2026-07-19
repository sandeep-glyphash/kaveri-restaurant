'use client';
import { ModalProvider } from '../context/ModalContext';
import { ShopProvider } from '../context/ShopContext';

export function Providers({ children }) {
    return (
        <ShopProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </ShopProvider>
    );
}
