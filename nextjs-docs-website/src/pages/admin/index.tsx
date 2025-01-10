import React from 'react';
import Header from '../../components/Layout/Header';
import Sidebar from '../../components/Layout/Sidebar';
import Footer from '../../components/Layout/Footer';
import AnalyticsDashboard from '../../components/AdminPanel/AnalyticsDashboard';
import ThemeSelector from '../../components/AdminPanel/ThemeSelector';
import WYSIWYGEditor from '../../components/AdminPanel/WYSIWYGEditor';

const AdminPanel = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow">
                <Sidebar />
                <main className="flex-grow p-4">
                    <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
                    <AnalyticsDashboard />
                    <ThemeSelector />
                    <WYSIWYGEditor />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default AdminPanel;