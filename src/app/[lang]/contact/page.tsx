import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import ContactUS from "@/components/contact-us";

export type NestedDictionary = { [key: string]: { [key: string]: string } };

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const wholeDictionary = await getDictionary(lang);
  const contactDictionary = wholeDictionary["Contact"];

  return (
    <main>
      <ContactUS dictionary={contactDictionary as NestedDictionary}></ContactUS>
    </main>
  );
}
