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
          {[
            { id: 1, bottom: "15vh", translateX: "5vw",  isNegative:true, text: "Calibre Jcam56" },
            { id: 2, bottom: "25vh", translateX: "15vw", isNegative:true, text: "13.75 mm de hauteur" },
            { id: 3, bottom: "25vh", translateX: "10vw", isNegative:false,text: "552 composants" },
          ].map(({ id, bottom, translateX,isNegative, text }) => (
            <div
              key={id}
              className={`gps-container absolute bottom-[${bottom}] ${isNegative ? '-' : ''}translate-x-[${translateX}] z-10`}
              onMouseEnter={() => setHoveredPoint(id)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <div className="gps-dot"></div>
              {hoveredPoint === id && (
                <div className="absolute left-1/2 font-body px-5 w-[350px] uppercase text-xl text-[#FFD700] bottom-[-5px]">
                  {text}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <h2
        className="leading-tight text-center font-title relative top-[-100px] tracking-wider uppercase text-[5vw] text-transparent bg-gradient-to-b from-white to-white/10 bg-clip-text glow-effect">
        Complications & caractéristiques
      </h2>
    </section>
  );
}
