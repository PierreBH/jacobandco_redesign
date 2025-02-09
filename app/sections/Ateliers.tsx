import ScrollVideo from "@/app/components/ScrollVideo";

export default function Ateliers() {
  return (
    <div className={"h-[370vh] w-screen bg-primary-image flex flex-col items-center"}>
      <h2
        className={"leading-tight text-center font-title mt-[20vh] mb-10 tracking-wider uppercase text-[5vw] text-transparent bg-gradient-to-b from-white to-white/10 bg-clip-text glow-effect"}>
        The regulator<br/>
          Display</h2>
      <button
        className={"w-fit border-[1px] border-white font-titleLight text-white px-5 leading-none tracking-[0.15em] text-lg rounded-full py-3 mb-[10vh]"}>Voir nos ateliers
      </button>
      <ScrollVideo/>
    </div>
  );
}