'use client'
import { Button } from "@/components/ui/button"
import { CookieIcon } from "@radix-ui/react-icons"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { NestedDictionary } from "@/page"

export default function SupportButton({ dictionary }: { dictionary: NestedDictionary}) {
    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const supportmeText = dictionary["supportME"];
    return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="flex justify-between relative" variant="outline" size="icon" onClick={() => openInNewTab('https://www.paypal.com/paypalme/yenuscr')}>
                            <CookieIcon className="absolute left-2 h-[1.2rem] w-[1.2rem] transition-all" />
                            <h2 className="absolute left-12  text-md sm:hidden">{supportmeText["tooltip"]}</h2>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent className="sm:block hidden">
                        <p>{supportmeText["tooltip"]}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
    );
}
