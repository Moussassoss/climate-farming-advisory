export interface WeatherData {
  temperature: number;
  humidity: number;
  rain: number;
  description: string;
}

export interface CropRecommendation {
  name: string;
  confidence: number;
  reason: string;
  planting_season?: string;
  water_requirements?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface ApiResponse {
  weather?: WeatherData;
  recommendations: CropRecommendation[];
}

export interface ApiError {
  message: string;
  code?: string;
}