import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

interface MobileNavProps {
  showMobileNav: boolean;
  closeMobileNav: () => void;
}

const MobileNav = ({ showMobileNav, closeMobileNav }: MobileNavProps) => {
  const navOpenStyles = showMobileNav
    ? "translate-x-0"
    : "-translate-x-[-100%]";

  return (
    <div>
      <div className={`fixed ${navOpenStyles} inset-0 transform transition-all duration-500 z-1002 bg-black w-full h-screen`}>
        <div
          className={`text-white ${navOpenStyles} top-0 fixed justify-center flex flex-col h-full transform 
            transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#9f7c4e] space-y-6 z-1050`}
        >
          {NAVLINKS.map((link) => (
            <Link href={link.url} key={link.id}>
              <p
                className="text-white w-fit text-[20px] ml-12 border-b-[1.5] pb-1 border-white
                  sm:text-[30px]"
              >
                {link.label}
              </p>
            </Link>
          ))}
          <CgClose  onClick={closeMobileNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
