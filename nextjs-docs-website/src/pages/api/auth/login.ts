import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateUser } from '../../../utils/auth';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const user = await authenticateUser(username, password);
            if (user) {
                // Set user session or token here
                res.status(200).json({ message: 'Login successful', user });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}