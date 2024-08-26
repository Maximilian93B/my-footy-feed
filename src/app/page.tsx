// src/app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';

// Define TypeScript types for better type safety
interface Team {
  name: string;
  score: number;
}

interface Match {
  homeTeam: Team;
  awayTeam: Team;
  status: string;
}

const Home: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);  // Use proper types
  const [loading, setLoading] = useState(true);  // State for loading
  const [error, setError] = useState<string | null>(null);  // State for error handling

  const fetchLiveMatches = async () => {
    try {
      const response = await fetch('/api/live-matches');  // Client-side call to the Next.js API route
      const data = await response.json();  // Parse the JSON response
      return data;  // Return the fetched data
    } catch (error) {
      console.error('Error fetching live matches:', error);
      throw new Error('Failed to fetch live matches');  // Throw an error in case of failure
    }
  };

  // Step 2: Use useEffect to call fetchLiveMatches when the component mounts
  useEffect(() => {
    const getMatches = async () => {
      try {
        const data = await fetchLiveMatches();  // Call the function to fetch matches
        setMatches(data);  // Store the data in state
      } catch (error) {
        setError('Failed to load matches');
      } finally {
        setLoading(false);  // Stop loading when the fetch is complete
      }
    };

    getMatches();
  }, []);  // Empty dependency array means it runs only once when the component mounts

  // Step 3: Render loading or error messages if necessary
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Step 4: Render the fetched matches once they are loaded
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Live Football Matches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match, index) => (
          <div key={index} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">
                {match.homeTeam.name} vs {match.awayTeam.name}
              </h2>
              <p>Status: {match.status}</p>
              <p>Score: {match.homeTeam.score} - {match.awayTeam.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;