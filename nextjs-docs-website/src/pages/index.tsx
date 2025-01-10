import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ThemeToggle from '../components/ThemeToggle';
import ResponsiveDesign from '../components/ResponsiveDesign';

const HomePage = () => {
    return (
        <div>
            <Header />
            <ThemeToggle />
            <ResponsiveDesign />
            <main>
                <h1>Welcome to the Documentation Website</h1>
                <p>This is the homepage of your documentation site.</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;