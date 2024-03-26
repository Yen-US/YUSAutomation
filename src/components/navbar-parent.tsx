'use client'
import NavBar from "@/components/navbar";
import NavBarMobile from "@/components/navbar-mobile";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export interface User {
  name: string;
  email: string;
  login: number;
  created: string;
  updated: string;
  tokens: number;
}


export default function NavbarsParentComponent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const checkScroll = () => {
        if (!visible && window.scrollY > 100) {
          setVisible(true);
        } else if (visible && window.scrollY <= 100) {
          setVisible(false);
        }
      };
    
      window.addEventListener("scroll", checkScroll);
      return () => window.removeEventListener("scroll", checkScroll);
    }, [visible]);
    
    const backToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

  return (
    <div>
      <NavBar className="md:flex items-center justify-between py-6 hidden w-full sm:px-2 md:px-10 lg:px-20 xl:px-52 transition-all"   />
      <NavBarMobile className="flex items-center justify-between py-6 md:hidden px-4 w-full transition-all"  />      
      <Button size='sm' className={`bottom-6 right-6 ${visible ? 'opacity-1' : 'opacity-0' } fixed transition-all text-sm ml-2`} onClick={backToTop}>Top</Button>
      
    </div>
  );
}
