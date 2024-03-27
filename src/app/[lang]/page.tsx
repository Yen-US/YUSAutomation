import Footer from "@/components/footer";
import NavbarsParentComponent from "@/components/navbar-parent";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

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
      <div>Hi</div>
      <Footer dictionary={dictionary as NestedDictionary}/>
    </main>
  );
}
