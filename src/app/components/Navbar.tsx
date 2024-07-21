
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
          <div className="text-lg font-bold">
            <Link href="/">Football News</Link>
          </div>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/signup">Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
