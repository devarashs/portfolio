import React from "react";

import Link from "next/link";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import { HeaderInfo } from "@/app/constants/information";

import { Menu, User2Icon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AppHeader() {
  return (
    <header className="bg-gray-800 py-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-white md:text-2xl text-xl font-bold">
          {HeaderInfo.title}
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-5">
            {HeaderInfo.navLinks.map((link) => (
              <li key={link.title}>
                <Link className="text-white" href={link.path}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row justify-between items-center gap-10">
          <ThemeChanger />
          <Link href={"/login"}>
            <User2Icon />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger>
            <Menu
              className="md:hidden text-white cursor-pointer hover:opacity-90"
              size={30}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mt-2 mb-5">Navigation Menu</SheetTitle>
              <hr className="py-1" />
              <SheetDescription>
                <nav>
                  <ul className="flex flex-col gap-2">
                    {HeaderInfo.navLinks.map((link) => (
                      <div key={link.title}>
                        <li className="dark:bg-slate-800 dark:hover:bg-slate-900 py-2 rounded-sm opacity-75 hover:opacity-100  transition-all duration-700 cursor-pointer">
                          <Link href={link.path}>{link.title}</Link>
                        </li>
                        <hr />
                      </div>
                    ))}
                  </ul>
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
