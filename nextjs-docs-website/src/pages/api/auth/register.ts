import type { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcryptjs';
import { connectToDatabase } from '../../../utils/mongodb';

export default async function register(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const { db } = await connectToDatabase();

    const existingUser = await db.collection('users').findOne({ username });
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = {
        username,
        password: hashedPassword,
        role: 'Editor', // Default role
    };

    await db.collection('users').insertOne(newUser);

    return res.status(201).json({ message: 'User registered successfully' });
}