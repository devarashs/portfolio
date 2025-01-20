import React from "react";

import Link from "next/link";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import { HeaderInfo } from "@/app/constants/information";

export default function AppHeader() {
  return (
    <header className="bg-gray-800 py-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-white text-2xl font-bold">
          {HeaderInfo.title}
        </Link>

        <div className="flex flex-row justify-between items-center gap-5">
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
}
