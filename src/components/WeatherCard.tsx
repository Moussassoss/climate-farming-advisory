import React from 'react';
import { Cloud, Thermometer, Droplets, CloudRain, Sun } from 'lucide-react';
import { WeatherData } from '../types';

interface WeatherCardProps {
  weather?: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  if (!weather) {
    return (
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 rounded-3xl p-8 mb-8 overflow-hidden shadow-2xl border border-slate-600">
        <div className="text-center py-12 text-white/80">
          <Cloud className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold">Weather data unavailable</h3>
          <p className="text-sm">Currently unable to load atmospheric data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 rounded-3xl p-8 mb-8 overflow-hidden shadow-2xl border border-slate-600">
      {/* Background elements remain the same... */}
      
      <div className="relative">
        {/* Header remains the same... */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Temperature Card */}
          <div className="group bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-xl mr-3 shadow-lg group-hover:scale-110 transition-transform">
                <Thermometer className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-bold text-orange-200">Temperature</span>
            </div>
            <p className="text-4xl font-black text-white mb-1">{weather?.temperature ?? '--'}°</p>
            <p className="text-orange-300 text-xs">Celsius • Optimal Range</p>
          </div>
          
          {/* Humidity Card */}
          <div className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-3 rounded-xl mr-3 shadow-lg group-hover:scale-110 transition-transform">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-bold text-blue-200">Humidity</span>
            </div>
            <p className="text-4xl font-black text-white mb-1">{weather?.humidity ?? '--'}%</p>
            <p className="text-blue-300 text-xs">Relative • Air Moisture</p>
          </div>
          
          {/* Precipitation Card */}
          <div className="group bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-cyan-400 to-teal-500 p-3 rounded-xl mr-3 shadow-lg group-hover:scale-110 transition-transform">
                <CloudRain className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-bold text-cyan-200">Precipitation</span>
            </div>
            <p className="text-4xl font-black text-white mb-1">{weather?.rain ?? '--'}</p>
            <p className="text-cyan-300 text-xs">mm • Recent Rainfall</p>
          </div>
          
          {/* Sky Conditions Card */}
          <div className="group bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 p-3 rounded-xl mr-3 shadow-lg group-hover:scale-110 transition-transform">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-bold text-purple-200">Sky Conditions</span>
            </div>
            <p className="text-lg font-bold text-white capitalize leading-tight mb-1">
              {weather?.description ?? 'No data'}
            </p>
            <p className="text-purple-300 text-xs">Current • Visibility</p>
          </div>
        </div>
        
        {/* Status indicator remains the same... */}
      </div>
    </div>
  );
};

export default WeatherCard;