"use client"

import * as React from "react"
import { FileTextIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { NestedDictionary } from "@/page"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";


export function LangToggle(  { dictionary }: { dictionary: NestedDictionary} ) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const langText = dictionary["langToggle"]

  return (
    <TooltipProvider>
      <Tooltip >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>

            <TooltipTrigger asChild>
              <Button className="flex justify-between relative" variant="outline" size="icon">
                <FileTextIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 left-2" />
                <FileTextIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 left-2" />
                <h2 className="absolute left-12 text-md sm:hidden">{langText["tooltip"]}</h2>
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              {i18n.locales.map((locale) => {
              return (
                <DropdownMenuItem key={locale} asChild>
                  <Link href={redirectedPathName(locale)}>{langText[locale]}</Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipContent className="sm:block hidden">
          <p>{langText["tooltip"]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
