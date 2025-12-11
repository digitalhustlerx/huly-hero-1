
import React from 'react';
import { Lock, UserPlus } from 'lucide-react';
import { ViewState } from '../../App';

interface AuthViewProps {
  onViewChange: (view: ViewState) => void;
}

const AuthView: React.FC<AuthViewProps> = ({ onViewChange }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#030508] px-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-[#0e121a] border border-white/10 rounded-2xl shadow-2xl shadow-black/30">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-chrome mb-2">Access Your Account</h1>
          <p className="text-secondary">Join NEXAFINANCE or log in to continue.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="text-xs font-bold uppercase text-gray-400 tracking-wider">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 block w-full px-4 py-3 bg-[#030508] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-xs font-bold uppercase text-gray-400 tracking-wider">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-2 block w-full px-4 py-3 bg-[#030508] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 bg-[#030508] border-white/20 text-blue-600 focus:ring-blue-500 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-gray-400">
                Remember me
              </label>
            </div>
            <a href="#" className="font-medium text-blue-500 hover:text-blue-400">
              Forgot your password?
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              <Lock className="w-5 h-5 mr-2" />
              Log In
            </button>
            <button
              type="button"
              className="group relative w-full flex justify-center py-3 px-4 border border-white/10 text-sm font-bold rounded-lg text-white bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-white transition-all"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthView;
