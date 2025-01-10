import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Admin Panel</h2>
            <ul>
                <li>
                    <Link href="/admin/manage">Manage Documentation</Link>
                </li>
                <li>
                    <Link href="/admin/analytics">Analytics Dashboard</Link>
                </li>
                <li>
                    <Link href="/admin/themes">Theme Selector</Link>
                </li>
                <li>
                    <Link href="/admin/users">User Management</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;