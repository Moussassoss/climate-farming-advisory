import React from 'react';
import { AlertTriangle, RefreshCw, Shield } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="relative bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 mb-8 border border-red-200 shadow-xl overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <AlertTriangle className="w-full h-full text-red-500" />
      </div>
      
      <div className="relative">
        <div className="flex items-start">
          <div className="bg-gradient-to-br from-red-400 to-pink-500 p-4 rounded-2xl mr-4 shadow-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-red-800 mb-2">
              Oops! Something went wrong
            </h3>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-red-200">
              <p className="text-red-700 leading-relaxed">{message}</p>
            </div>
            
            {onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-xl hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-red-400/50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;