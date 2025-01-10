import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">
                <Link href="/">Documentation</Link>
            </div>
            <nav className="space-x-4">
                <Link href="/docs">Docs</Link>
                <Link href="/admin">Admin</Link>
            </nav>
            <ThemeToggle />
        </header>
    );
};

export default Header;