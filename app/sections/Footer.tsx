import {Suspense, useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef1 = useRef<HTMLDivElement | null>(null);
  const watchesRef = useRef<HTMLDivElement | null>(null);
  const footerBottomRef = useRef<HTMLDivElement | null>(null);
  const refTest = useRef<HTMLDivElement | null>(null);

  const names = ["Blue", "Red", "Green"];

  useEffect(() => {
    if (!sectionRef1.current || !watchesRef.current || !footerBottomRef.current) return;

    // Animation des montres avec un ScrollTrigger et un pin
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef1.current,
        start: "top top",
        end: "+=350%", // Étend la durée du scroll
        scrub: 1,
        pin: true, // Fixe la section pendant le scroll
        // A la fin de cette animation on peut déclencher une autre animation
        onToggle: self => {
          if (self.isActive) {
            gsap.fromTo(
              footerBottomRef.current,
              {y: "100vh"},
              {
                y: "-40vh",
                scrollTrigger: {
                  trigger: refTest.current,
                  start: "top 100%",
                  end: "bottom 100%",
                  scrub: true,
                },
              }
            );
          }
        }
      },
    });
    const watches = watchesRef.current.children;

    gsap.utils.toArray(watches).forEach((watch, index) => {
      if (watch){
        if(index === 1) {
          tl.to(watch, { y: -50, duration: 1.3 }, index * 1.5);
        } else {
          tl.to(watch, { y: 0, duration: 1.3 }, index * 1.5);
        }
      }
    });

    tl.fromTo(
      watchesRef.current.children,
      {  y: 800 },
      { y: 0, stagger: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={sectionRef1}
         className="w-screen h-[350vh] bg-primary-image flex flex-col items-center justify-start pt-[10vh]">
      <img src="./logo_style2.svg" alt="logo" className="w-[50vw] h-fit glow-effect-svg"/>

      {/* Conteneur des montres */}
      <div ref={watchesRef} className="flex max-w-[80vw] gap-10">
        {["first", "second", "third"].map((watch, index) => (
          <div key={watch} className="watch-container flex flex-col items-center relative w-fit h-fit">
            <img src={`./img/footer/${watch}_watch.png`} alt={`watch_${watch}`}
                 className={`w-full h-fit mx-2 glow-effect-${watch}-watch`}/>
            <h5 className="leading-tight font-title tracking-wider uppercase text-[3vw]
                          text-transparent bg-gradient-to-b from-white to-white/0 bg-clip-text glow-effect absolute bottom-0">
              {names[index]}
            </h5>
          </div>
        ))}
      </div>
      <div ref={refTest} className={"mt-[240vh] h-[100vh] absolute"}></div>

      <div ref={footerBottomRef} className={"w-full h-[40vh] translate-y-[50vh] relative flex justify-center z-0"}>
        <Suspense fallback={"Loading"}>
          <video className={"mix-blend-lighten w-full opacity-10 absolute"} preload="none" playsInline
                 autoPlay
                 loop
                 muted>
            <source src="/img/footer/terre.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </Suspense>
        <div className={"flex justify-between h-fit w-full max-w-[95vw] mb-10vh gap-10 absolute bottom-[-15vh]"}>
          <div className={"flex w-full flex-col"}>
            <p className={"font-bodyLight font-bold"}>Designer Virgile - Developper Lesty</p>
            <p className={"font-bodyLight text-white/50"}>Copyright © 2025 Virgile Lesty.</p>
          </div>
          <div className={"flex w-full flex-col"}>
            <p className={"font-bodyLight text-white/50"}>Images/vidéos Abdullah Qasim</p>
            <p className={"font-bodyLight text-white/50"}>Images/vidéos Jacobandco.com</p>
          </div>
          <div className={"flex w-full flex-col"}>
            <p className={"p-3"}></p>
            <p className={"font-bodyLight text-white/50"}>Images/vidéos Jacobandco.com</p>
          </div>
          <div className={"w-[200px] h-full"}>
            <img src={"./logo.svg"} className={"w-full h-full float-right"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
