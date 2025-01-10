import React, { useEffect, useState } from 'react';
import { fetchAnalyticsData } from '../../../utils/analytics';

const AnalyticsDashboard: React.FC = () => {
    const [analyticsData, setAnalyticsData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAnalyticsData = async () => {
            try {
                const data = await fetchAnalyticsData();
                setAnalyticsData(data);
            } catch (err) {
                setError('Failed to fetch analytics data');
            } finally {
                setLoading(false);
            }
        };

        getAnalyticsData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Analytics Dashboard</h1>
            <div>
                <h2>Traffic Insights</h2>
                <p>Total Visitors: {analyticsData.totalVisitors}</p>
                <p>Page Views: {analyticsData.pageViews}</p>
            </div>
            <div>
                <h2>Search Insights</h2>
                <p>Most Searched Term: {analyticsData.mostSearchedTerm}</p>
                <p>Search Queries: {analyticsData.searchQueries}</p>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;