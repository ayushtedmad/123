import React from 'react';
import { useState } from 'react';
import AnalyticsDashboard from '../../components/AdminPanel/AnalyticsDashboard';
import ThemeSelector from '../../components/AdminPanel/ThemeSelector';
import WYSIWYGEditor from '../../components/AdminPanel/WYSIWYGEditor';
import Sidebar from '../../components/Layout/Sidebar';

const Manage = () => {
    const [theme, setTheme] = useState('light');

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        // Additional logic to apply the theme can be added here
    };

    return (
        <div className={`admin-panel ${theme}`}>
            <Sidebar />
            <main className="content">
                <h1>Manage Documentation</h1>
                <ThemeSelector onThemeChange={handleThemeChange} />
                <AnalyticsDashboard />
                <WYSIWYGEditor />
            </main>
        </div>
    );
};

export default Manage;