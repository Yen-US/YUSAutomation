import { NestedDictionary } from "@/page";

export default function HomeBanner({
  dictionary,
  lang
}: {
  dictionary: NestedDictionary;
  lang: string;
}) {

  const banner = dictionary["Banner"];
  return (
    <div className="flex gap-4 justify-center mt-10">
        <h2 className="text-xl">{banner["description"]}</h2>
    </div>
  );
}