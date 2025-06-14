"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider 
      {...props}
      defaultTheme="light" // Force light theme
      enableSystem={false} // Disable system theme detection
      forcedTheme="light" // Force light theme always
    >
      {children}
    </NextThemesProvider>
  );
}
