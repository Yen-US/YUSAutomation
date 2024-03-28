import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import HeroComponent from "@/components/hero";
import HomeButtonsComponent from "@/components/home-main-buttons";

export type NestedDictionary = { [key: string]: { [key: string]: string } };

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const wholeDictionary = await getDictionary(lang);
  const dictionary = wholeDictionary["Home"];

  return (
    

    <main>
      <HeroComponent dictionary={dictionary as NestedDictionary} />
      <HomeButtonsComponent dictionary={dictionary as NestedDictionary} lang={lang}/>
    </main>
  );
}
