import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppHeader />
      <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-12 lg:p-20">
        {children}
      </main>
      <AppFooter />
    </div>
  );
}
