"use client";
import { weatherAPI } from "@/lib/axios";
import Geolocation from "./Geolocation";
import { getWeatherData } from "./weather";
import Convert from "./convert";

export default function StartBtn() {
  // console.log(getWeatherData());

  return (
    <div>
      <button className="border-2 p-2 font-bold rounded-2xl">
        오늘도 하루를 시작해 볼까요?
      </button>
    </div>
  );
}
