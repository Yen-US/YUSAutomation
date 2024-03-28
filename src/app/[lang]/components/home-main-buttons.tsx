import { NestedDictionary } from "@/page";
import { Button } from "./ui/button";

export default function HomeButtonsComponent({
  dictionary,
}: {
  dictionary: NestedDictionary;
}) {
  return (
    <div className="flex gap-4 justify-center">
        <Button size="lg" className="w-32"> {dictionary["Hero"]["buttonContact"]} </Button>
        <Button size="lg" className="w-32" variant="outline"> {dictionary["Hero"]["buttonFreeStart"]} </Button>
    </div>
  );
}