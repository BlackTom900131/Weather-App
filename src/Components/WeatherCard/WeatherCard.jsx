import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./WeatherCard.css";
function WeatherCard() {
  const [imgurl, setImgUrl] = useState();
  const { weatherData, handlesearchCity } = useContext(Context);
  useEffect(() => {
    if (
      weatherData?.weather?.[0]?.main === "Haze" ||
      weatherData?.weather?.[0]?.main === "Clouds"
    ) {
      setImgUrl("/Haze.png");
    } else if (weatherData?.weather?.[0]?.main === "Clear") {
      setImgUrl("/Clear.png");
    } else if (weatherData?.weather?.[0]?.main === "Rain") {
      setImgUrl("/Rain.png");
    }
  }, [weatherData]);

  return (
    <>
      {!weatherData?.name ? (
        <ErrorMessage />
      ) : (
        <>
          <div
            className="maincontainer flex justify-evenly items-center rounded-xl  h-[50vh] w-[50vw]  
            mobile:w-[90vw]
          mobile:flex-col mb-8 "
          >
            <div
              className="h-60 w-60 bg-center bg-contain bg-no-repeat mobile:w-52 mobile:h-52 "
              style={{ backgroundImage: `url(${imgurl})` }}
            ></div>

            {/* Temp and City Name */}
            <div className=" mobile:text-center mb-8">
              <h1 className="text-5xl font-extrabold mobile:text-3xl">
                {weatherData.name}, {weatherData.sys.country}
              </h1>
              <h1 className="text-xl font-semibold">
                {(weatherData.main.temp - 273.15).toFixed(2)} °C
              </h1>
              {weatherData.weather.map((e, index) => (
                <div key={index} className="text-xl font-semibold">
                  {e.main}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default WeatherCard;
