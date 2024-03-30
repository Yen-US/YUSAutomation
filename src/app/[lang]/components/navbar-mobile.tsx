import { Badge } from "@/components/ui/badge"
import { ModeToggle } from "@/components/mode-toggle"
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
import Link from "next/link";

import { NestedDictionary } from "@/page";

export default function NavBarMobile({ className, dictionary, lang }: { className: string, dictionary: NestedDictionary, lang: string}) {
    const navbarText = dictionary["navbar"];
    return (
        <nav className={className}>
            <button className="flex items-center gap-2">
          <Link href={"/"+lang}>
            <Logo />
          </Link>
        <Badge variant="outline"> {navbarText["badge"]} </Badge>
        </button>
            <div className="flex align-center gap-2">
                <Sheet>
                    <SheetTrigger asChild><Button variant="outline" size="icon">
                        <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
                    </Button></SheetTrigger>
                    <SheetContent>
                        <SheetHeader className="flex flex-col">
                                <ModeToggle dictionary={dictionary}/>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
