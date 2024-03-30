import { NestedDictionary } from "@/page";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HomeButtonsComponent({
  dictionary,
  lang
}: {
  dictionary: NestedDictionary;
  lang: string;
}) {
  return (
    <div className="flex gap-4 justify-center mt-10">
        <Button size="lg" className="w-32"><Link href={"/"+lang+"/contact"}>{dictionary["Hero"]["buttonContact"]} </Link> </Button>
        <Button size="lg" className="w-32" variant="outline"><Link href={"/"+lang+"/contact"}> {dictionary["Hero"]["buttonFreeStart"]}</Link> </Button>
    </div>
  );
}