// src/app/page.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Football News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example article card */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Article Title</h2>
            <p>Article summary...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        {/* More articles will be mapped here */}
      </div>
    </div>
  );
};

export default Home;
