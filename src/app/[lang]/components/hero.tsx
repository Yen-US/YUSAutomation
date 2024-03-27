import { NestedDictionary } from "@/page";

export default function HeroComponent({
  dictionary,
}: {
  dictionary: NestedDictionary;
}) {
  return (
    <h1 className="flex justify-center items-center flex-col mb-4 text-8xl font-black tracking-tighter leading-tight">
      <span
        hero-content={dictionary["Hero"]["Main1"]}
        style={
          {
            "--gradientStart": "red",
            "--gradientEnd": "blue",
            "--delay": "0s",
          } as React.CSSProperties
        }
        className="block relative hero"
      >
        {dictionary["Hero"]["Main1"]}
      </span>
      <span
        hero-content={dictionary["Hero"]["Main2"]}
        style={
            {
              "--gradientStart": "blue",
              "--gradientEnd": "gray",
              "--delay": "3s",
            } as React.CSSProperties
          }
        hero-color-start={""}
        hero-color-end={""}
        className="block relative hero"
      >
        {dictionary["Hero"]["Main2"]}
      </span>
      <span
        hero-content={dictionary["Hero"]["Main3"]}
        style={
            {
              "--gradientStart": "orange",
              "--gradientEnd": "red",
              "--delay": "6s",
            } as React.CSSProperties
          }
        hero-color-start={""}
        hero-color-end={""}
        className="block relative hero"
      >
        {dictionary["Hero"]["Main3"]}
      </span>
    </h1>
  );
}
