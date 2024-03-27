"use client";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import ThemeProvider from "./ThemeToggle/theme-provider";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </Provider>
    </>
  );
}
