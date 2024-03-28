"use client";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import SupportButton from "@/components/support-button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/logo";
import { NestedDictionary } from "@/page";
import { LangToggle } from "@/components/lang-toggle";
import Link from "next/link";

export default function NavBar({
  className,
  dictionary,
  lang
}: {
  className: string;
  dictionary: NestedDictionary;
  lang: string;
}) {
  const navbarText = dictionary["navbar"];

  /**
   * <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {navbarText["toolbarItemOne"]}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px]">
                  <ModeToggle dictionary={dictionary} />
                  <SupportButton dictionary={dictionary} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {navbarText["toolbarItemTwo"]}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                  <ModeToggle dictionary={dictionary} />
                  <SupportButton dictionary={dictionary} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {navbarText["toolbarItemThree"]}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[200px] gap-3 p-4 md:w-[300px] grid-cols-1 lg:w-[400px]">
                  <ModeToggle dictionary={dictionary} />
                  <SupportButton dictionary={dictionary} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
   */

  return (
    <nav className={className}>
        <button className="flex items-center gap-4">
          <Link href={"/"+lang}>
            <Logo />
          </Link>
        <Badge variant="outline"> {navbarText["badge"]} </Badge>
        </button>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <SupportButton dictionary={dictionary} />
          <ModeToggle dictionary={dictionary} />
          <LangToggle dictionary={dictionary} />
        </div>
      </div>
    </nav>
  );
}
