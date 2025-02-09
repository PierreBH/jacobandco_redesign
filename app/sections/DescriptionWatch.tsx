import {useEffect, useRef} from "react";
import {gsap} from "gsap";

export default function DescriptionWatch() {
  const paragraphRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef2 = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef3 = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef4 = useRef<HTMLHeadingElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!paragraphRef.current || !paragraphRef2.current || !paragraphRef3.current || !paragraphRef4.current) return;

    // Fragmenter le texte en lettres individuelles que pour les spans
    const text = paragraphRef.current.textContent || '';
    paragraphRef.current.innerHTML = text
      .split('')
      .map(letter => `<span class='letter'>${letter}</span>`)
      .join('');

    const text2 = paragraphRef2.current.textContent || '';
    paragraphRef2.current.innerHTML = text2
      .split('')
      .map(letter => `<span class='letter'>${letter}</span>`)
      .join('');

    const text3 = paragraphRef3.current.textContent || '';
    paragraphRef3.current.innerHTML = text3
      .split('')
      .map(letter => `<span class='letter'>${letter}</span>`)
      .join('');

    const text4 = paragraphRef4.current.textContent || '';
    paragraphRef4.current.innerHTML = text4
      .split('')
      .map(letter => `<span class='letter'>${letter}</span>`)
      .join('');

    if (!imgRef.current || !sectionRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { y: "0" },
      {
        y: "135vh",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "10% center",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      }
    );

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

    gsap.fromTo(
      paragraphRef2.current.querySelectorAll('.letter'),
      { color: '#232323', y: 50 },  // Lettres cachées au départ
      {
        color: '#fff',
        y: 0,
        scrollTrigger: {
          trigger: paragraphRef2.current, // Élément déclencheur
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

    gsap.fromTo(
      paragraphRef3.current.querySelectorAll('.letter'),
      { color: '#232323', y: 50 },  // Lettres cachées au départ
      {
        color: '#fff',
        y: 0,
        scrollTrigger: {
          trigger: paragraphRef3.current, // Élément déclencheur
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

    gsap.fromTo(
      paragraphRef4.current.querySelectorAll('.letter'),
      { color: '#232323', y: 50 },  // Lettres cachées au départ
      {
        color: '#fff',
        y: 0,
        scrollTrigger: {
          trigger: paragraphRef4.current, // Élément déclencheur
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
    <section className={"w-full h-[200vh] flex flex-col items-center justify-center bg-primary-image relative"} ref={sectionRef}>
      <div className={"w-[80vw] h-full mx-auto flex justify-center"}>
        <img src={"/img/descriptionwatch/first_watch.png"} alt={"watch"}
             className={"w-fit max-w-[50vw] top-0 h-fit mix-blend-lighten absolute"} ref={imgRef}/>

        <div className={"h-full w-full flex justify-start items-center absolute top-[20vh]"}>
          <img src={"/img/mars_planet.png"} alt={"planet"} className={"mix-blend-lighten"}/>

        </div>
        <div className={"flex w-full h-full justify-start items-center"}>
          <div className={"w-1/2 flex gap-10 flex-col"}>
            <h2
              className="leading-tight font-title tracking-wider uppercase text-[3vw] text-transparent bg-gradient-to-b from-white to-white/10 bg-clip-text glow-effect">
              Mouvement<br/> rotatif
            </h2>
            <div>
              <div
                className={"text-[#FFD700] w-[40px] h-[40px] border-[#FFD700] font-body flex items-center justify-center rounded-full border-[1px] relative"}>
                <span className={"absolute"}>01</span>
              </div>
              <p className={"w-[20vw] mt-2 font-body tracking-wider text-white/50"} ref={paragraphRef}>
                De la base du mouvement, une longue aiguille dorée détache. Elle désigne un grand anneau bombé et
                translucide : l’échelle des secondes.
              </p>
            </div>
          </div>
          <div className={"w-1/2 h-full flex gap-10 flex-col items-end justify-end"}>
            <div className={"flex flex-col gap-10"}>
              <h2
                className="leading-tight font-title tracking-wider uppercase text-[3vw] text-transparent bg-gradient-to-b from-white to-white/10 bg-clip-text glow-effect">
                Une <br/> minute
              </h2>
              <div>
                <div
                  className={"text-[#FFD700] w-[40px] h-[40px] border-[#FFD700] font-body flex items-center justify-center rounded-full border-[1px] relative"}>
                  <span className={"absolute"}>02</span>
                </div>
                <p className={"w-[20vw] mt-2 font-body tracking-wider text-white/50"} ref={paragraphRef2}>
                  Astronomia Regulator dispose d’un sous-cadran séparé pour les minutes et d’un autre pour les heures. Fixés à la plate-forme, ils tournent également en une minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"h-screen w-[80vw] flex justify-center items-center bg-primary-image"}>
        <img src={"/img/descriptionwatch/second_watch.png"} alt={"watch"}
             className={"w-fit max-w-[50vw] h-fit mix-blend-lighten absolute"}/>
        <div className={"flex w-full h-full items-center"}>
          <div className={"w-1/2 flex gap-10 items-start h-full justify-center flex-col"}>
            <p className={"w-[20vw] mt-2 font-body tracking-wider text-white/50"} ref={paragraphRef3}>
              Cet anneau tourne dans le sens inverse des aiguilles d’une montre en 60 secondes, offrant une façon claire
              et inégalée d’afficher les secondes.
            </p>
          </div>
          <div className={"w-1/2 h-full flex gap-10 flex-col items-end justify-center"}>
            <p className={"w-[20vw] mt-2 font-body tracking-wider text-white/50"} ref={paragraphRef4}>
              Le troisième bras est un tourbillon volant. Il effectue une rotation sur son propre axe en une minute.
              Faisant partie de la plate-forme verticale, il dispose d’un deuxième axe de rotation, également en une
              minute.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}