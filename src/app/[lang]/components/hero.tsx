import { NestedDictionary } from "@/page";
import { Button } from "./ui/button";

export default function HeroComponent({
  dictionary,
}: {
  dictionary: NestedDictionary;
}) {
  return (
    <h1 className="flex justify-center items-center flex-col mb-4 sm:text-8xl font-black tracking-tighter leading-[1.1em] text-6xl">
      <span
        hero-content={dictionary["Hero"]["Main1"]}
        style={
          {
            "--gradientStart": "orange",
            "--gradientEnd": "red",
            "--delay": "0s",
          } as React.CSSProperties
        }
        className="block relative hero animate-hero-span delay-0 pr-3"
      >
        {dictionary["Hero"]["Main1"]}
      </span>
      <span
        hero-content={dictionary["Hero"]["Main2"]}
        style={
            {
              "--gradientStart": "red",
              "--gradientEnd": "blue",
              "--delay": "3s",
            } as React.CSSProperties
          }
        className="block relative hero animate-hero-span delay-3000 pr-3"
      >
        {dictionary["Hero"]["Main2"]}
      </span>
      <span
        hero-content={dictionary["Hero"]["Main3"]}
        style={
            {
              "--gradientStart": "blue",
              "--gradientEnd": "cyan",
              "--delay": "6s",
            } as React.CSSProperties
          }
        className="block relative hero animate-hero-span delay-6000 pr-3"
      >
        {dictionary["Hero"]["Main3"]}
      </span>
    </h1>
  );
}
