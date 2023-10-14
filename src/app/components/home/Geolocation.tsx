"use client";

import { useState } from "react";

export default function Geolocation() {
  const [latLng, setLatLng] = useState(["37.4832054", "126.9800127"]);
  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatLng([
          `${position.coords.latitude}`,
          `${position.coords.longitude}`,
        ]);
      });
    } else {
      setLatLng(latLng);
    }
  };
  // useEffect(() => {
  //   getPosition();
  // }, []);
}
