'use client';
import Hero from "@/app/sections/Hero";
import DesignInspiration from "@/app/sections/DesignInspiration";
import Caracteristique from "@/app/sections/Caracteristique";
import Caracteristique2 from "@/app/sections/Caracteristique2";
import DescriptionWatch from "@/app/sections/DescriptionWatch";
import Ateliers from "@/app/sections/Ateliers";
import Footer from "@/app/sections/Footer";

export default function Home() {
  return (
    <main className={"w-full h-full flex items-center flex-col overflow-hidden"}>
      <img src={"/img/watch_hero.png"} alt={"logo"}
           className={"w-fit max-w-[50vw] h-fit z-20 top-[30vh] absolute mix-blend-lighten"}/>
      <Hero/>
      <DesignInspiration/>
      <Caracteristique/>
      <Caracteristique2 />
      <DescriptionWatch />
      <Ateliers />
      <Footer />
    </main>
  );
}
