import { useState, useCallback } from 'react';
import { ApiResponse, Location } from '../types';



interface FarmingDataHook {
  data: ApiResponse | null;
  error: string | null;
  isLoading: boolean;
  fetchData: (location: Location) => Promise<void>;
}

export const useFarmingData = (): FarmingDataHook => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async (location: Location) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://climate-farming-advisory-backend-production.up.railway.app/recommend?lat=${location.latitude}&lon=${location.longitude}`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result: ApiResponse = await response.json();
      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'Failed to fetch farming recommendations. Please check if the backend server is running on https://climate-farming-advisory-backend-production.up.railway.app/.';
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, error, isLoading, fetchData };
};