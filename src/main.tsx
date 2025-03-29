import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

async function deferRender() {
  const { server } = await import("../src/mocks/node.ts");
  return server.start();
}

if (import.meta.env.DEV) {
  deferRender().then(() => {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
}
