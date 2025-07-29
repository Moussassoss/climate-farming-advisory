import React from 'react';
import { Sprout, Zap, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-pink-400 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Sparkles className="h-4 w-4 text-emerald-300 opacity-60" />
        </div>
        <div className="absolute top-3/4 right-1/3 animate-float delay-1000">
          <Sparkles className="h-3 w-3 text-blue-300 opacity-40" />
        </div>
        <div className="absolute top-1/2 left-3/4 animate-float delay-500">
          <Sparkles className="h-5 w-5 text-purple-300 opacity-50" />
        </div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-50 animate-pulse group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-emerald-400 to-emerald-600 p-4 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Sprout className="h-10 w-10 text-white" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              AgriVision
            </h1>
            <div className="flex flex-col space-y-1">
              <Zap className="h-6 w-6 text-yellow-400 animate-bounce" />
              <Sparkles className="h-4 w-4 text-pink-400 animate-pulse" />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-light text-gray-200 mb-3 animate-fade-in">
            Next-Generation Climate Intelligence
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence, satellite imagery, and real-time atmospheric data to revolutionize your agricultural decisions with unprecedented precision
          </p>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-blue-400 via-purple-400 to-pink-400 animate-gradient"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-emerald-400 animate-gradient"></div>
      </div>
    </header>
  );
};

export default Header;