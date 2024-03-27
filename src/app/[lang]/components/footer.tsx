'use client'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NestedDictionary } from "@/page";
export default function Footer({ dictionary }: { dictionary: NestedDictionary}) {
    const footerText = dictionary["footer"];

    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="flex items-center justify-between py-4 sm:px-2 md:px-10 lg:px-20 xl:px-52 transition-all">
            <div className="flex items-center justify-center px-4">
            <span>{footerText["text"]}</span>
            <Button className="text-sm ml-2" size='sm' onClick={()=>openInNewTab('https://www.yenus.dev')}> @yenus.dev</Button>
            </div>
            <Badge variant="outline"> v1.0 </Badge>
            
        </footer>
    );
}
