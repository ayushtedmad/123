import { NextApiRequest, NextApiResponse } from 'next';
import { getAnalyticsData } from '../../../utils/analytics';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const data = await getAnalyticsData();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching analytics data' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}