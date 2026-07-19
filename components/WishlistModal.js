import React from 'react';
import { useShop } from '../context/ShopContext';
import Image from 'next/image';
import Link from 'next/link';

const WishlistModal = ({ isOpen, onClose }) => {
    const { wishlist, toggleWishlist, addToCart } = useShop();

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-white z-10">
                    <h3 className="text-2xl font-serif font-bold tracking-wide text-stone-900 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        Your Wishlist ({wishlist.length})
                    </h3>
                    <button onClick={onClose} className="text-stone-600 hover:text-[#d4af37] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                {wishlist.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center font-sans">
                        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mb-6 text-stone-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-stone-600 mb-2">Your wishlist is empty</h4>
                        <p className="text-stone-500 mb-8">Save your favorite dishes for later!</p>
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
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {wishlist.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                                <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0 border border-stone-100">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold text-stone-800 font-serif text-lg">{item.name}</h4>
                                            <button
                                                onClick={() => toggleWishlist(item)}
                                                className="text-stone-400 hover:text-red-500"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-stone-500 text-xs line-clamp-1">{item.desc}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="font-bold text-stone-900 text-lg">₹{item.price}</span>
                                        <button
                                            onClick={() => {
                                                addToCart(item);
                                                // Optional: Remove from wishlist after adding? Usually no.
                                            }}
                                            className="px-4 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-amber-500 transition-colors shadow-md"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistModal;
