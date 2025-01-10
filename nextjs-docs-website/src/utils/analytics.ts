import { useEffect } from 'react';

const analyticsEndpoint = '/api/analytics';

export const trackPageView = (url) => {
    if (typeof window !== 'undefined') {
        window.gtag('config', 'GA_TRACKING_ID', {
            page_path: url,
        });
    }
};

export const logEvent = (eventCategory, eventAction, eventLabel) => {
    if (typeof window !== 'undefined') {
        window.gtag('event', eventAction, {
            event_category: eventCategory,
            event_label: eventLabel,
        });
    }
};

export const fetchAnalyticsData = async () => {
    const response = await fetch(analyticsEndpoint);
    if (!response.ok) {
        throw new Error('Failed to fetch analytics data');
    }
    return response.json();
};

export const useAnalytics = () => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            trackPageView(url);
        };

        window.addEventListener('routeChangeComplete', handleRouteChange);
        return () => {
            window.removeEventListener('routeChangeComplete', handleRouteChange);
        };
    }, []);
};