"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Dashboard from "@/components/dashboard/dashboard";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-background">
        <Dashboard />
      </main>
    </ThemeProvider>
  );
}