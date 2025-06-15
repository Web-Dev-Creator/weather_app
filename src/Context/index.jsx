import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Bareilly");
  const [thisLocation, setLocation] = useState("");

  // fatch API

  const fetchWeather = async () => {
    // const url = `http://api.weatherapi.com/v1/current.json?key=191c9fbeb9b7457c8d8153405250905&q=${place}&aqi=yes`;
    try {
      const response = await axios.get(url);
      console.log(response.data);
      const data = response.data;
      setWeather(data.current); // sets current weather
      setLocation(data.location.name); // or data.location.region/country if needed
      setValues([data]); // Wrap in array if you want to use `.map()` etc
    } catch (e) {
      console.error(e);
      alert("This place does not exist or API limit reached.");
    }
  };

  useEffect(() => {
    // fetch Weather()
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        thisLocation,
        place,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
