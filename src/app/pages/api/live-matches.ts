import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.NEXT_PUBLIC_SPORTSMONKS_API_KEY;
const BASE_URL = 'https://api.sportsmonks.com/v3/football';

export default async function handler (req: NextApiRequest , res: NextApiResponse) {
    try {
        const response = await axios.get(`${BASE_URL}/fixtures/live`, {
            params: {
                api_token: API_KEY,
            },
        });
        res.status(200).json(response.data);

    } catch (error) {
        console.error('Error fetching live matches:', error);
        res.status(500).json({ message: 'Error fetching live matches', error})
    }
}

