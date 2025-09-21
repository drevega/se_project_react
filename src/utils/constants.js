// constants for the React app - weather conditions, API base URL, default coordinates, and API key

export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clearnight.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/night/cloudynight.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rainy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../assets/day/storm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/rainynight.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../assets/night/stormynight.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snownight.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/night/fognight.png", import.meta.url).href,
  },
];

export const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.drewtwr.jumpingcrab.com"
  : "http://localhost:3001";

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/defaultday.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/defaultnight.png", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 35.994034,
  longitude: -78.898621,
};

export const apiKey = "809b35a810497f13dc73b45a4afc02de";
