import React, { use, useEffect, useState } from "react";
import axios from "axios";

const WeatherApi = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCoordinates = async (cityName) => {
    let res = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`,
    );

    setCoordinates(res.data.results[0]);
  };

  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      getCoordinates("Pune");
      const result = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m`,
      );
      setWeather(result);
      console.log(weather)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(true);
    }
    console.log(result);
  };

  useEffect(() => {
    if (coordinates) {
      fetchWeatherData();
    }
  }, [coordinates]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {isLoading && <h1>Loading...</h1>} <h1>WeatherApi</h1>
    </div>
  );
};

export default WeatherApi;
