import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { UsersContextProvider } from "./contexts/UsersContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UsersContextProvider>
      <App />
    </UsersContextProvider>
  </React.StrictMode>
);
