// src/app/signup/page.tsx
import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div className="form-control">
            <label htmlFor="username" className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" id="username" name="username" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" id="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" id="password" name="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
