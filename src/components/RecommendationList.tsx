import React from 'react';
import { Wheat, TrendingUp, Info, Calendar, Droplet, Sparkles, Award, Target, Zap } from 'lucide-react';
import { CropRecommendation } from '../types';

interface RecommendationListProps {
  recommendations: CropRecommendation[];
}

const RecommendationList: React.FC<RecommendationListProps> = ({ recommendations }) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'from-emerald-400 to-green-500';
    if (confidence >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 80) return 'Excellent Match';
    if (confidence >= 60) return 'Good Match';
    return 'Consider Alternatives';
  };

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 80) return { icon: Target, text: 'Optimal', color: 'emerald' };
    if (confidence >= 60) return { icon: TrendingUp, text: 'Suitable', color: 'yellow' };
    return { icon: Info, text: 'Caution', color: 'red' };
  };

  const getCropEmoji = (cropName: string = '') => {
    const name = cropName.toLowerCase();
    if (name.includes('wheat')) return '🌾';
    if (name.includes('corn') || name.includes('maize')) return '🌽';
    if (name.includes('rice')) return '🌾';
    if (name.includes('tomato')) return '🍅';
    if (name.includes('potato')) return '🥔';
    if (name.includes('carrot')) return '🥕';
    if (name.includes('bean')) return '🫘';
    if (name.includes('lettuce')) return '🥬';
    if (name.includes('pepper')) return '🌶️';
    if (name.includes('cucumber')) return '🥒';
    return '🌱';
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-3xl p-8 mb-8 shadow-2xl border border-gray-200 overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative">
        <div className="flex items-center mb-8">
          <div className="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 p-4 rounded-2xl mr-4 shadow-2xl">
            <Award className="h-10 w-10 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-gray-800 mb-1">AI Crop Intelligence</h2>
            <p className="text-gray-600 text-sm flex items-center">
              <Zap className="h-4 w-4 mr-2 text-yellow-500" />
              Precision agriculture recommendations
            </p>
          </div>
        </div>
        
        {recommendations.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Wheat className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No Recommendations Available</h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Unable to generate crop recommendations for your current location. Please try a different area or check back later.
            </p>
          </div>
        ) : (
          <div className="grid gap-8">
            {recommendations
            .filter(crop => crop?.name) 
            .map((crop, index) => {
              const badge = getConfidenceBadge(crop.confidence);
              const BadgeIcon = badge.icon;
              
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Enhanced background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity">
                    <div className="text-9xl transform rotate-12">{getCropEmoji(crop.name)}</div>
                  </div>
                  
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="text-5xl mr-6 transform group-hover:scale-110 transition-transform duration-300">
                          {getCropEmoji(crop.name)}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-gray-800 capitalize mb-2 group-hover:text-emerald-700 transition-colors">
                            {crop.name}
                          </h3>
                          <div className="flex items-center space-x-3">
                            <div className={`bg-gradient-to-r ${getConfidenceColor(crop.confidence)} px-5 py-3 rounded-2xl flex items-center shadow-xl group-hover:scale-105 transition-transform`}>
                              <Sparkles className="h-5 w-5 text-white mr-2" />
                              <span className="text-white font-bold">
                                {getConfidenceText(crop.confidence)}
                              </span>
                            </div>
                            <div className={`bg-gradient-to-br from-${badge.color}-100 to-${badge.color}-200 px-4 py-2 rounded-xl flex items-center border border-${badge.color}-300`}>
                              <BadgeIcon className={`h-4 w-4 text-${badge.color}-600 mr-2`} />
                              <span className={`text-${badge.color}-700 font-bold text-sm`}>{badge.text}</span>
                            </div>
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-2 rounded-xl border border-gray-300">
                              <span className="text-gray-700 font-black text-lg">{crop.confidence}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-2xl border border-blue-200 group-hover:border-blue-300 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-3 rounded-xl mr-4 mt-1 shadow-lg">
                            <Info className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-black text-gray-800 mb-3 text-lg">AI Analysis & Reasoning</h4>
                            <p className="text-gray-700 leading-relaxed text-base">{crop.reason}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {crop.planting_season && (
                          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-6 rounded-2xl border border-green-200 group-hover:border-green-300 transition-colors">
                            <div className="flex items-center">
                              <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-3 rounded-xl mr-4 shadow-lg">
                                <Calendar className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-black text-gray-800 text-base mb-1">Optimal Planting Window</h4>
                                <p className="text-gray-700 font-medium">{crop.planting_season}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {crop.water_requirements && (
                          <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 p-6 rounded-2xl border border-cyan-200 group-hover:border-cyan-300 transition-colors">
                            <div className="flex items-center">
                              <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-3 rounded-xl mr-4 shadow-lg">
                                <Droplet className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-black text-gray-800 text-base mb-1">Water Requirements</h4>
                                <p className="text-gray-700 font-medium">{crop.water_requirements}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationList;