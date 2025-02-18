import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import AuthProvider from "./Providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./Providers/ThemeProvider/ThemeProvider";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="w-full ">
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
