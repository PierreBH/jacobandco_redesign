import {Suspense, useEffect, useRef} from "react";
import {gsap} from "gsap";

export default function Caracteristique2() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!videoRef.current || !sectionRef.current) return;

      gsap.fromTo(
        videoRef.current,
        { y: "-60vh" },
        {
          y: "20vh",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "-50% center",
            end: "bottom 100%",
            scrub: true,
            markers: false,
          },
        }
      );
    }, 100); // Petit délai pour laisser React rendre le DOM
  }, []);


  return (
    <section className={"w-full h-full bg-primary-image flex items-center flex-col overflow-hidden relative"} ref={sectionRef}>
      <Suspense fallback={"Loading"}>
        <video className={"w-[18vw] h-fit rotate-[-90deg] absolute mix-blend-lighten"} preload="none" playsInline
               ref={videoRef}
               autoPlay
               loop
               muted>
          <source src="/video/watch_video.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </Suspense>

      <div
           className="w-[80vw] mx-auto h-screen flex justify-between items-center relative">
        <div className={"w-[23vw]"}>
          <h2
            className="leading-tight font-title tracking-wider uppercase text-[3vw] text-transparent bg-gradient-to-b from-white to-white/10 bg-clip-text glow-effect">
            Calibre<br/> Jcam56
          </h2>
          <div className="relative h-[1px] w-full rounded-md bg-gradient-to-r from-white/10 to-white after:absolute after:right-0 after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:h-[5px] after:w-[5px] after:bg-white"></div>
        </div>
        <div className={"w-[20vw] mt-[20vh] text-white flex gap-10 flex-col"}>
          <p className={"font-body tracking-wider text-white/50"}>
            Avec une hauteur de 13,75 mm,
            le calibre JCAM56 est le mouvement de type Astronomia le plus fin jamais conçu par Jacob & Co., un exploit compte tenu de sa nature verticale.
          </p>
          <button
            className={"w-fit border-[1px] border-white font-titleLight text-white px-5 leading-none tracking-[0.15em] text-sm rounded-full py-3"}>
            Fiche Technique
          </button>
        </div>
      </div>
    </section>
  )
}