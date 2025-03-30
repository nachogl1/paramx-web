import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App.tsx";

const isDevMocks = import.meta.env.VITE_DEV_MOCKS.toLowerCase() === "true";
console.info(`PARAMEX ${isDevMocks ? "DEV" : "PROD"} MODE ON`);
console.info(`MSW WORKERS ${import.meta.env.VITE_DEV_MOCKS}`);

function startApp() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

async function deferRender() {
  const { server } = await import("../src/mocks/node.ts");
  return server.start();
}

if (isDevMocks) {
  deferRender().then(() => {
    startApp();
  });
} else {
  startApp();
}
