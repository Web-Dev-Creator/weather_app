import { useState } from "react";
import Search from "./assets/icons/search.svg";
import "./index.css";
import BackgroundLayout from "./Components/BackgroundLayout";
import WeatherCard from "./Components/WeatherCard";
import MiniCard from "./Components/MiniCard";
import { useStateContext } from "./Context";

function WeatherApp() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  // console.log(weather)
  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center ">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={Search} alt="search" />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                // Submit the form
                submitCity();
              }
            }}
            type="text"
            placeholder="search city"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          weatherIcon={weather.condition?.icon}
          place={thisLocation} // data.location.name
          windspeed={weather.wind_kph} // data.current.wind_kph
          humidity={weather.humidity} // data.current.humidity
          temperature={weather.temp_c} // data.current.temp_c
          heatIndex={weather.heatindex_c || weather.temp_c} // fallback if not available
          iconString={weather.condition?.text} // data.current.condition.text
          conditions={weather.condition?.text}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default WeatherApp;
