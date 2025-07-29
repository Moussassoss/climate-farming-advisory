import  { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LocationButton from './components/LocationButton';
import WeatherCard from './components/WeatherCard';
import RecommendationList from './components/RecommendationList';
import MapView from './components/MapView';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { useGeolocation } from './hooks/useGeolocation';
import { useFarmingData } from './hooks/useFarmingData';

function App() {
  const { location, error: locationError, isLoading: isGettingLocation, getLocation } = useGeolocation();
  const { data, error: dataError, isLoading: isFetchingData, fetchData } = useFarmingData();

  // Fetch farming data when location is obtained
  useEffect(() => {
    if (location) {
      fetchData(location);
    }
  }, [location, fetchData]);

  const handleLocationClick = () => {
    getLocation();
  };

  const handleRetry = () => {
    if (locationError) {
      getLocation();
    } else if (dataError && location) {
      fetchData(location);
    }
  };

  const isLoading = isGettingLocation || isFetchingData;
  const hasError = locationError || dataError;
  const errorMessage = locationError || dataError;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Location Button - Always show unless we have data */}
        {!data && (
          <LocationButton
            onLocationClick={handleLocationClick}
            isLoading={isLoading}
            disabled={isLoading}
          />
        )}

        {/* Error Message */}
        {hasError && (
          <ErrorMessage
            message={errorMessage!}
            onRetry={handleRetry}
          />
        )}

        {/* Loading State */}
        {isLoading && (
          <Loader
            message={
              isGettingLocation 
                ? 'Acquiring your location...' 
                : 'AI is analyzing your climate data...'
            }
          />
        )}

        {/* Main Content - Show when we have data */}
        {data && location && !isLoading && (
          <div className="space-y-8">
            {/* Weather Information */}
            <WeatherCard weather={data.weather} />
            
            {/* Crop Recommendations */}
            <RecommendationList recommendations={data.recommendations} />
            
            {/* Map View */}
            <MapView location={location} />
            
            {/* Enhanced Refresh Button */}
            <div className="text-center">
              <div className="relative inline-block">
                {/* Enhanced glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                
                <button
                  onClick={() => fetchData(location)}
                  className="relative inline-flex items-center px-12 py-6 text-xl font-black text-white bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-700 rounded-3xl hover:from-emerald-600 hover:via-blue-700 hover:to-purple-800 focus:outline-none focus:ring-6 focus:ring-emerald-400/50 transition-all duration-500 transform hover:scale-110 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-white/20"
                  disabled={isFetchingData}
                >
                  {/* Enhanced glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                  
                  <div className="relative flex items-center">
                    {isFetchingData ? (
                      <>
                        <div className="w-8 h-8 mr-4 animate-spin rounded-full border-3 border-white border-t-transparent"></div>
                        Refreshing Intelligence...
                      </>
                    ) : (
                      <>
                        <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Refresh AI Analysis
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Welcome Message - Show when no data and no loading */}
        {!data && !isLoading && !hasError && (
          <div className="text-center py-20">
            <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-16 max-w-6xl mx-auto border border-white/50 overflow-hidden">
              {/* Enhanced background decoration */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-400 rounded-full blur-2xl animate-pulse delay-500"></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-pink-400 rounded-full blur-2xl animate-pulse delay-700"></div>
              </div>
              
              <div className="relative">
                <div className="text-9xl mb-8 animate-bounce">🚀</div>
                <h2 className="text-5xl md:text-7xl font-black text-gray-800 mb-8 bg-gradient-to-r from-emerald-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Welcome to the Future of Farming
                </h2>
                <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
                  Harness cutting-edge AI and real-time climate intelligence to revolutionize your agricultural decisions. 
                  Get personalized crop recommendations that adapt to your unique environmental conditions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="group">
                    <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-100 p-8 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-200 shadow-xl">
                      <div className="text-6xl mb-4">🌤️</div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-800 mb-4">Real-Time Weather Intelligence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced atmospheric analysis with precision meteorological data for your exact location
                    </p>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 p-8 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500 border border-emerald-200 shadow-xl">
                      <div className="text-6xl mb-4">🧠</div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-800 mb-4">AI-Powered Crop Optimization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Machine learning algorithms analyze thousands of variables to recommend optimal crops
                    </p>
                  </div>
                  
                  <div className="group">
                    <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 p-8 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-200 shadow-xl">
                      <div className="text-6xl mb-4">🛰️</div>
                    </div>
                    <h3 className="text-2xl font-black text-gray-800 mb-4">Satellite Precision Mapping</h3>
                    <p className="text-gray-600 leading-relaxed">
                      High-resolution satellite imagery and geospatial analysis for your farm location
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;