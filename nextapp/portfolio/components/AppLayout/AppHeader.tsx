import React from "react";

import Link from "next/link";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
// import BurgerNav from "../BurgerNav/BurgerNav";
// import { NavListData } from "@/constants";

export default function AppHeader() {
  //   const renderNavList = NavListData.map((navItem) => (
  //     <li key={navItem.name}>
  //       <Link href={navItem.link} className="text-white hover:text-gray-300">
  //         {navItem.name}
  //       </Link>
  //     </li>
  //   ));

  return (
    <header className="bg-gray-800 py-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-white text-2xl font-bold">
          Welcome to my Portfolio!
        </Link>
        {/* <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-4">{renderNavList}</ul>
          </nav>
        </div> */}
        <div className="flex flex-row justify-between items-center gap-5">
          <ThemeChanger />
          {/* <div className="md:hidden">
            <BurgerNav NavList={NavListData} />
          </div> */}
        </div>
      </div>
    </header>
  );
}
