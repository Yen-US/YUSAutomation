import Footer from "@/components/footer";
import NavbarsParentComponent from "@/components/navbar-parent";
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
  const dictionary = await getDictionary(lang);

  return (
    

    <main className="flex min-h-screen min-w-screen flex-col justify-between font-mono">
      <NavbarsParentComponent dictionary={dictionary as NestedDictionary}/>
      <HeroComponent dictionary={dictionary as NestedDictionary}/>
      <HomeButtonsComponent dictionary={dictionary as NestedDictionary}/>
      <Footer dictionary={dictionary as NestedDictionary}/>
    </main>
  );
}
