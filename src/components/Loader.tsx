import React from 'react';
import { Brain, Zap } from 'lucide-react';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative mb-8">
        {/* Outer spinning ring */}
        <div className="animate-spin rounded-full h-24 w-24 border-4 border-transparent border-t-emerald-500 border-r-blue-500"></div>
        
        {/* Inner spinning ring */}
        <div className="absolute inset-2 animate-spin rounded-full h-20 w-20 border-4 border-transparent border-b-purple-500 border-l-pink-500" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-br from-emerald-400 to-blue-500 p-3 rounded-full shadow-lg">
            <Brain className="h-8 w-8 text-white animate-pulse" />
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -right-2">
          <Zap className="h-4 w-4 text-yellow-400 animate-bounce" />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Zap className="h-3 w-3 text-pink-400 animate-bounce delay-500" />
        </div>
      </div>
      
      <div className="text-center max-w-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{message}</h3>
        <p className="text-gray-600 mb-4">
          Our AI is analyzing climate patterns, soil conditions, and weather data to provide you with the most accurate recommendations.
        </p>
        
        {/* Progress indicators */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;