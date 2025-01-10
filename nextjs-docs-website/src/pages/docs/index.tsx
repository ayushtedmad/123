import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../../components/ThemeToggle';
import { ResponsiveDesign } from '../../components/ResponsiveDesign';

const DocumentationIndex = () => {
    return (
        <div className="container mx-auto p-4">
            <header className="mb-4">
                <h1 className="text-3xl font-bold">Documentation</h1>
                <ThemeToggle />
            </header>
            <ResponsiveDesign />
            <nav className="mb-4">
                <ul className="list-disc pl-5">
                    <li>
                        <Link href="/docs/getting-started">
                            Getting Started
                        </Link>
                    </li>
                    <li>
                        <Link href="/docs/api-reference">
                            API Reference
                        </Link>
                    </li>
                    <li>
                        <Link href="/docs/tutorials">
                            Tutorials
                        </Link>
                    </li>
                </ul>
            </nav>
            <footer className="mt-4">
                <p className="text-sm text-gray-600">© {new Date().getFullYear()} Documentation Website</p>
            </footer>
        </div>
    );
};

export default DocumentationIndex;