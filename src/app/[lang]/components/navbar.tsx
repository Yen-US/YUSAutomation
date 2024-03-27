'use client'
import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
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
    navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import Logo from "@/components/logo";
import { NestedDictionary } from "@/page";


export default function NavBar( { className, dictionary }: { className: string, dictionary: NestedDictionary} ) {
    const navbarText = dictionary["navbar"];

    return (
        <nav className={className}>
            <div className="flex items-center gap-4">
                <Logo/>
                <Badge variant="outline"> {navbarText["badge"]} </Badge>
            </div>
            <div className="flex items-center gap-4">
            <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{navbarText["toolbarItemOne"]}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                            <div className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px]">
                                    <ModeToggle dictionary={dictionary}/>
                                    <SupportButton dictionary={dictionary}/>
                                </div>
                                
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{navbarText["toolbarItemTwo"]}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                                    <ModeToggle dictionary={dictionary}/>
                                    <SupportButton dictionary={dictionary}/>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{navbarText["toolbarItemThree"]}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[200px] gap-3 p-4 md:w-[300px] grid-cols-1 lg:w-[400px]">
                                <ModeToggle dictionary={dictionary}/>
                                    <SupportButton dictionary={dictionary}/>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <ModeToggle dictionary={dictionary}/>
                </div>
        </nav>
    );
}
