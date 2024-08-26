import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";


const API_KEY= process.env.NEXT_PUBLIC_SPORTSMONKS_API_KEY;
const BASE_URL='https://api.sportmonks.com/v3/football';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const response = await axios.get(`${BASE_URL}/leagues`, {
        params: {
          api_token: API_KEY,
          include: req.query.include || '', // Add query params if necessary
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching leagues:', error);
      res.status(500).json({ message: 'Error fetching leagues' });
    }
  }