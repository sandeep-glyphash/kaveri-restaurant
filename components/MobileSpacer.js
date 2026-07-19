'use client';
import { usePathname } from 'next/navigation';

export default function MobileSpacer() {
    const pathname = usePathname();
    if (pathname === '/') return null;
    return <div className="h-24 lg:hidden" />;
}
