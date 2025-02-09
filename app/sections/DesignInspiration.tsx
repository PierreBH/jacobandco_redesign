import {gsap} from "gsap";
import {useEffect, useRef} from "react";

export default function DesignInspiration() {
  const paragraphRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!paragraphRef.current) return;

    // Fragmenter le texte en lettres individuelles que pour les spans
    const text = paragraphRef.current.textContent || '';
    paragraphRef.current.innerHTML = text
      .split('')
      .map(letter => `<span class='letter'>${letter}</span>`)
      .join('');

    // Créer l'animation qui se déclenche lors du scroll
    gsap.fromTo(
      paragraphRef.current.querySelectorAll('.letter'),
      { color: '#232323', y: 50 },  // Lettres cachées au départ
      {
        color: '#fff',
        y: 0,
        scrollTrigger: {
          trigger: paragraphRef.current, // Élément déclencheur
          start: 'top 100%', // Commence lorsque le haut de l'élément est à 100% du viewport
          end: 'bottom 50%', // Termine lorsque le bas de l'élément est à 10% du viewport
          scrub: true, // L'animation suit le scroll
          markers: false, // Marqueurs de débogage
        },
        stagger: 0.01, // Délais d'apparition entre les lettres
        ease: 'power1.out',
        duration: 0.5,
      }
    );
  }, []);

  return (
    <section className={"w-screen h-[140vh] bg-primary-image flex relative"}>
      <div className={"h-[100px] top-0 w-full bg-gradient-to-b from-black to-black/10 absolute"}></div>
      <div className={"flex justify-center h-full w-full"}>
        <div className={"flex flex-col justify-center max-w-[40vw] ml-[10vw] gap-5"}>
          <h2
            className={"leading-tight font-title tracking-wider uppercase text-[5vw] text-transparent bg-gradient-to-b from-white to-white/10 bg-clip-text glow-effect"}>Design
            Inspiration</h2>
          <p ref={paragraphRef} className={"font-body tracking-wider text-white/50 "}>Les régulateurs remontent aux ateliers de fabrication du 19e siècle,
            où <span>des dizaines d’ouvriers se réunissaient dans un même espace.</span>
            Ils avaient besoin d’un seul temps de référence pour réguler
            leur travail, d’où le mot Régulateur. <span>Pour optimiser la lecture
            de l’heure, chacune de leurs indications a été divisée
              en 3 emplacements distincts</span> sur le cadran.</p>
          <button className={"w-fit border-[1px] border-white font-titleLight text-white px-5 leading-none tracking-[0.15em] text-sm rounded-full py-3"}>Notre histoire</button>
        </div>
        <div className={"flex justify-end items-end w-full"}>
          <img src={"/img/jupiter_planet.png"} alt={"watch"} className={"w-fit h-fit relative z-30 mix-blend-lighten"}/>
        </div>
      </div>
    </section>
  );
}