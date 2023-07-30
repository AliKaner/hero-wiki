import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroPage } from "./pages/heroPage";
import { HomePage } from "./pages/homePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./context/useTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/hero",
    children: [
      {
        path: ":id",
        element: <HeroPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
  </QueryClientProvider>
);
