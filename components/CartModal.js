import React from 'react';
import { useShop } from '../context/ShopContext';
import Image from 'next/image';
import Link from 'next/link';

const CartModal = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, addToCart, cartTotal } = useShop();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-white z-10">
                    <h3 className="text-2xl font-serif font-bold tracking-wide text-stone-900">Your Cart ({cart.length})</h3>
                    <button onClick={onClose} className="text-stone-600 hover:text-[#d4af37] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                {cart.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center font-sans">
                        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-stone-600 mb-2">Your cart is empty</h4>
                        <p className="text-stone-500 mb-8">Add some delicious items from our menu!</p>
                        <Link href="/menu">
                            <button
                                onClick={onClose}
                                className="bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] text-stone-950 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                            >
                                Browse Menu
                            </button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-4 border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                                    <div className="w-20 h-20 relative rounded-lg overflow-hidden shrink-0 border border-stone-100">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-bold text-stone-800 font-serif">{item.name}</h4>
                                            <span className="font-bold text-stone-900">₹{item.price * item.quantity}</span>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center bg-stone-50 rounded-lg border border-stone-200">
                                                <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">-</button>
                                                <span className="px-2 text-sm font-bold text-stone-900">{item.quantity}</span>
                                                <button onClick={() => addToCart(item)} className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-600 font-bold">+</button>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs font-bold uppercase hover:underline">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 border-t border-stone-200 bg-stone-50">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-stone-600 uppercase tracking-widest text-sm">Total</span>
                                <span className="text-2xl font-serif font-bold text-stone-900">₹{cartTotal}</span>
                            </div>
                            <Link href="/menu">
                                <button
                                    onClick={onClose}
                                    className="w-full bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#b8860b] text-stone-950 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all uppercase tracking-widest"
                                >
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartModal;
