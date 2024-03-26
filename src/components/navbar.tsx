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


export default function NavBar({ className }: { className: string }) {

    return (
        <nav className={className}>
            <div className="flex items-center gap-4">
                <Logo/>
                <Badge variant="outline"> IA </Badge>
            </div>
            <div className="flex items-center gap-4">
            <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Automatizaciones</NavigationMenuTrigger>
                            <NavigationMenuContent>
                            <div className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px]">
                                    <ModeToggle/>
                                    <SupportButton />
                                </div>
                                
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Precios</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                                    <ModeToggle/>
                                    <SupportButton />
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Contactanos</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-[200px] gap-3 p-4 md:w-[300px] grid-cols-1 lg:w-[400px]">
                                    <ModeToggle/>
                                    <SupportButton />
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <ModeToggle/>
                </div>
        </nav>
    );
}
