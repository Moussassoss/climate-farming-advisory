import React from 'react';
import { MapPin, Loader2, Sparkles } from 'lucide-react';

interface LocationButtonProps {
  onLocationClick: () => void;
  isLoading: boolean;
  disabled: boolean;
}

const LocationButton: React.FC<LocationButtonProps> = ({
  onLocationClick,
  isLoading,
  disabled
}) => {
  return (
    <div className="text-center mb-12">
      <div className="relative inline-block">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
        
        <button
          onClick={onLocationClick}
          disabled={disabled}
          className={`
            relative inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl
            transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50
            shadow-2xl backdrop-blur-sm border border-white/20
            ${disabled
              ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white shadow-emerald-500/25'
            }
          `}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-6 h-6 mr-3 animate-spin" />
              <span>Analyzing Location...</span>
            </>
          ) : (
            <>
              <div className="relative mr-3">
                <MapPin className="w-6 h-6" />
                <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
              </div>
              <span>Discover Smart Farming Insights</span>
            </>
          )}
        </button>
      </div>
      
      <p className="text-gray-600 mt-4 text-sm max-w-md mx-auto">
        Grant location access to unlock personalized crop recommendations powered by AI and real-time climate analysis
      </p>
    </div>
  );
};

export default LocationButton;