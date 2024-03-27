import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
import SupportButton from "@/components/support-button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Logo from "@/components/logo";

import { NestedDictionary } from "@/page";

export default function NavBarMobile({ className, dictionary }: { className: string, dictionary: NestedDictionary}) {
    const navbarText = dictionary["navbar"];
    return (
        <nav className={className}>
            <div className="flex items-center gap-2">
                <Logo/>
                <Badge variant="outline"> {navbarText["badge"]} </Badge>
            </div>
            <div className="flex align-center gap-2">
                <Sheet>
                    <SheetTrigger asChild><Button variant="outline" size="icon">
                        <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
                    </Button></SheetTrigger>
                    <SheetContent>
                        <SheetHeader className="flex flex-col">
                                <SupportButton dictionary={dictionary} /> 
                                <ModeToggle dictionary={dictionary}/>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
