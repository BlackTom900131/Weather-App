import React from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import InputField from "../InputField/InputField";
import WeatherCard from "../WeatherCard/WeatherCard";
import SmallCardContainer from "../SmallCardContainer/SmallCardContainer";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
function Container() {
  const { weatherData } = useContext(Context);
  return (
    <div
      className={`
        flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat gap-4
        ${!weatherData?.name ? "h-screen " : "h-[100vh] mobile:h-[120vh]"} `}
      style={{ backgroundImage: `url('/Cloud1.jpg'` }}
    >
        <InputField />
      {!weatherData?.name ? (
        <ErrorMessage />
      ) : (
        <>
          <WeatherCard />
          <SmallCardContainer />
        </>
      )}
    </div>
  );
}

export default Container;
