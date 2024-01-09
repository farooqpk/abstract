import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const CardData = [
    {
      title: "Using Abstract",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
    {
      title: "Manage your account",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
    {
      title: "Manage organizations",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
    {
      title: "Manage billing",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
    {
      title: "Authenticate to Abstract",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
    {
      title: "Abstract support",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
    },
  ];

  return (
    <main className="flex flex-col w-full">
      <section className="bg-grayish flex flex-col gap-7 items-center justify-center h-72">
        <h1 className=" text-3xl md:text-5xl font-normal md:font-semibold">
          How can we help?
        </h1>
        <Input
          placeholder="Search"
          className=" w-[90%] md:w-[40%] h-12 md:h-14 text-lg border border-black border-opacity-35"
        />
      </section>

      <section className="bg-white container h-auto flex items-center justify-center my-11 mx-auto">
        <div className="grid grid-col-1 md:grid-cols-2 gap-14 w-[90%] p2">
          {CardData.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 md:gap-7 p-2 rounded-2xl border border-opacity-45 shadow-md shadow-slate-200 h-40 md:h-48 hover:scale-105 transition bg-slate-50 "
            >
              <Image
                src={
                  "https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png"
                }
                alt="Logo IE"
                width="100"
                height="0"
                className="my-auto object-contain h-12 md:h-16"
              />

              <div className="flex flex-col gap-3 justify-center">
                <h1 className="text-sm md:text-lg font-semibold capitalize">
                  {item.title}
                </h1>
                <p className="md:text-sm font-normal text-xs text-slate-600">
                  {item.description}
                </p>
                <Link href={"/"}>
                  <span className="text-blue-500  font-normal text-xs md:text-sm">
                    {"Learn More"}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
