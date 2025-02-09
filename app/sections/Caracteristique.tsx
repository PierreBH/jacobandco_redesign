import {useEffect, useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Caracteristique() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null); // Stocke l'index du point survolé

  useEffect(() => {
    if (!imgRef.current || !sectionRef.current) return;

    const tl = gsap.fromTo(
      imgRef.current,
      { bottom: "33vh" },
      {
        bottom: "0px",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "0% center",
          end: "bottom 100%",
          scrub: true,
          pin: false,
          markers: false,
          onUpdate: (self) => {
            const progress = self.progress ?? self.scroll();
            setIsAtBottom(progress >= 1);
          },
        },
      }
    );

    return () => {
      tl.scrollTrigger?.kill(); // Nettoyage si le composant est démonté
    };

  }, []);

  return (
    <section ref={sectionRef} className="w-screen h-screen bg-primary-image flex flex-col justify-center items-center relative">
      <img
        ref={imgRef}
        src="/img/caracteristique.png"
        alt="hero"
        className="w-full absolute z-10 max-w-[55vw] h-fit"
      />
      {isAtBottom && (
        <div>
          <div
            key={1}
            className="gps-container absolute bottom-[15vh] -translate-x-[5vw] z-10"
            onMouseEnter={() => setHoveredPoint(1)}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            <div className="gps-dot"></div>
            {hoveredPoint === 1 && (
              <div className="absolute left-1/2 font-body px-5 w-[350px] uppercase text-xl text-[#FFD700] bottom-[-5px]">
                Calibre Jcam56
              </div>
            )}
          </div>

          <div
            key={2}
            className="gps-container absolute bottom-[25vh] -translate-x-[15vw] z-10"
            onMouseEnter={() => setHoveredPoint(2)}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            <div className="gps-dot"></div>
            {hoveredPoint === 2 && (
              <div className="absolute left-1/2 font-body px-5 w-[350px] uppercase text-xl text-[#FFD700] bottom-[-5px]">
                13.75 mm de hauteur
              </div>
            )}
          </div>

          <div
            key={3}
            className="gps-container absolute bottom-[25vh] translate-x-[10vw] z-10"
            onMouseEnter={() => setHoveredPoint(3)}
            onMouseLeave={() => setHoveredPoint(null)}
          >
            <div className="gps-dot"></div>
            {hoveredPoint === 3 && (
              <div className="absolute left-1/2 font-body px-5 w-[350px] uppercase text-xl text-[#FFD700] bottom-[-5px]">
                552 composants
              </div>
            )}
          </div>
        </div>
      )}
      <h2
        className="leading-tight text-center font-title relative top-[-100px] tracking-wider uppercase text-[5vw] text-transparent bg-gradient-to-b from-white to-white/10 bg-clip-text glow-effect">
        Complications & caractéristiques
      </h2>
    </section>
  );
}
