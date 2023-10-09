"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="modern"
          themes={["light", "dark", "modern"]}
        >
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
