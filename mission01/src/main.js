import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function WeatherCondition({ month, day, status, size = 64 }) {
  let imgURL = "";
  let statusMessage = "";
  let label = "";

  switch (status) {
    default:
    case "sunny":
      imgURL = "/weather/sunny.png";
      statusMessage = "맑음";
      label = "태양";
      break;
    case "PartlyCloudy":
      imgURL = "/weather/PartlyCloudy.png";
      statusMessage = "약간 흐림";
      label = "구름 낀 태양";
      break;
    case "rainy":
      imgURL = "/weather/rainy.png";
      statusMessage = "비";
      label = "비 내리는 구름";
      break;
    case "lightning":
      imgURL = "/weather/lightning.png";
      statusMessage = "번개";
      label = "번개치는 구름";
      break;
    case "FineDust":
      imgURL = "/weather/FineDust.png";
      statusMessage = "미세먼지";
      label = "흐린 하늘";
      break;
  }

  // JSX
  return (
    <figure className="Weather" aria-label={label}>
      <img src={`${imgURL}`} alt={statusMessage} width={size} height={size} />
      <figcaption>
        <p>
          {month}월 {day}일
        </p>
        <span>날씨 : {statusMessage}</span>
      </figcaption>
    </figure>
  );
}

function WeatherDataPage() {
  // JSX
  return (
    <ul className="WeatherData">
      <li>
        <WeatherCondition month="7" day="25" status="FineDust" />
      </li>
      <li>
        <WeatherCondition month="7" day="26" status="lightning" />
      </li>
      <li>
        <WeatherCondition month="7" day="27" status="rainy" />
      </li>
      <li>
        <WeatherCondition month="7" day="28" status="PartlyCloudy" />
      </li>
      <li>
        <WeatherCondition month="7" day="29" status="sunny" />
      </li>
    </ul>
  );
}

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(<WeatherDataPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
