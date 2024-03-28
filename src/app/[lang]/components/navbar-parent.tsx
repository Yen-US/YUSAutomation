'use client'
import NavBar from "@/components/navbar";
import NavBarMobile from "@/components/navbar-mobile";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { NestedDictionary } from "@/page";


export default function NavbarsParentComponent({dictionary, lang}:{dictionary: NestedDictionary, lang: string}) {
  return (
    <div className="sticky top-0 backdrop-blur-sm z-50 shadow-b-shadow">
      <NavBar className="md:flex items-center justify-between py-4 hidden w-full sm:px-2 md:px-10 lg:px-20 xl:px-52 transition-all" dictionary={dictionary} lang={lang}/>
      <NavBarMobile className="flex items-center justify-between py-4 md:hidden px-4 w-full transition-all" dictionary={dictionary} lang={lang}/>      
    </div>
  );
}
