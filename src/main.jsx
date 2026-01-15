import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import ThemeProvider from "./providers/ThemeProvider.jsx";
import routes from "./routes/routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>
)
