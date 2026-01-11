"use client";

import { useGet } from "@/src/hooks/useGet";
import HeaderTopBar from "./HeaderTopBar";
import Logo from "./Logo";
import MobileNav from './MobileNav';
import NavItems from "./NavItems";
import { Specialty } from "./types";

const Header = () => {
  const { data } = useGet<Specialty[]>("/specialties", ["specialties"]);
  return (
    <header className="relative pb-20 lg:pb-40">
      <div className="fixed w-full h-20 md:h-24 lg:h-40  z-9999 bg-white">
        <HeaderTopBar />
        <div className="h-20 md:h-24 lg:h-28 shadow-lg flex items-center relative">
          <div className="container flex items-center justify-between">
            <Logo />
            <NavItems specialty={data?.data} />
            <MobileNav specialty={data?.data} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
