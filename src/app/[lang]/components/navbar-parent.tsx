'use client'
import NavBar from "@/components/navbar";
import NavBarMobile from "@/components/navbar-mobile";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { NestedDictionary } from "@/page";


export default function NavbarsParentComponent({dictionary}:{dictionary: NestedDictionary}) {
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
    const topText = dictionary["topButton"];  
  return (
    <div>
      <NavBar className="md:flex items-center justify-between py-4 hidden w-full sm:px-2 md:px-10 lg:px-20 xl:px-52 transition-all" dictionary={dictionary}  />
      <NavBarMobile className="flex items-center justify-between py-4 md:hidden px-4 w-full transition-all" dictionary={dictionary}  />      
      <Button size='sm' className={`bottom-4 right-4 ${visible ? 'opacity-1' : 'opacity-0' } fixed transition-all text-sm ml-2`} onClick={backToTop}>{topText["text"]}</Button>
      
    </div>
  );
}
