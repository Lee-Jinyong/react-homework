import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AutoLoginButton from "@/components/AutoLoginButton.tsx";
import { isActive } from "./data/AutoLoginButton.ts";
import "@/style/main.css";

const container = document.getElementById("react-app");

if (container) {
  createRoot(container as HTMLElement).render(
    <StrictMode>
      <AutoLoginButton isActive={isActive} />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
