'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = 119; // Nombre total d'images
  const images = useRef<HTMLImageElement[]>([]);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false); // Gérer l'état de chargement des images
  const [error, setError] = useState<string | null>(null); // Pour gérer les erreurs
  const [canvasHeight, setCanvasHeight] = useState<number>(1080); // État pour la hauteur du canvas

  useEffect(() => {
    setCanvasHeight(window.innerHeight-(window.innerHeight/1000)); // Ajuster la hauteur du canvas à la hauteur de la fenêtre
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Précharger les images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/img/scrollVideoWatch/frames_${String(i).padStart(3, "0")}.gif`; // Exemple : frame_0001.gif
      img.className = "img-test";
      img.onload = () => {
        loadedCount++;
        loadedImages.push(img);

        // Vérifier si toutes les images sont chargées
        if (loadedCount === frameCount) {
          images.current = loadedImages;
          setIsImagesLoaded(true); // Toutes les images sont chargées
          renderImage(0); // Afficher la première image une fois chargée
        }
      };

      // En cas d'erreur de chargement, afficher une erreur dans la console
      img.onerror = () => {
        console.error(`Erreur de chargement de l'image : ${img.src}`);
        setError(`Erreur de chargement de l'image : ${img.src}`);
      };
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      if (!context.current) {
        console.error("Le contexte du canvas n'a pas pu être récupéré.");
      }
    }
  }, []);


  const renderImage = (index: number) => {
    if (context.current && images.current[index]) {
      const img = images.current[index];
      const canvasWidth = canvasRef.current!.width;
      const canvasHeight = canvasRef.current!.height;

      // Calculer les nouvelles dimensions pour l'image avec un object-fit "cover"
      const aspectRatio = img.width / img.height;
      const newHeight = canvasHeight;
      const newWidth = newHeight * aspectRatio;

      // Ajuster la largeur si nécessaire
      const offsetX = (newWidth - canvasWidth) / 2;

      context.current.clearRect(0, 0, canvasWidth, canvasHeight);
      context.current.drawImage(
        img,
        -offsetX, // Décalage horizontal pour centrer l'image
        0,
        newWidth,
        newHeight
      );
    } else {
      console.log('Image ou context indisponible');
    }
  };

  useEffect(() => {
    if (!isImagesLoaded) return;

    // Animation avec GSAP et ScrollTrigger
    const scrollTrigger = gsap.to({}, {
      marginTop: '20px',
      scrollTrigger: {
        trigger: canvasRef.current,
        start: "top top", // Commence au début du canvas
        end: "bottom+=100% top", // Fait en sorte que l'animation se termine à la fin du canvas + une certaine distance
        scrub: 1,  // Plus élevé pour un défilement plus fluide
        pin: true,
        markers: false,
        onUpdate: function (self) {
          const scrollProgress = self.progress;
          const frameIndex = Math.floor(scrollProgress * (frameCount - 1));
          renderImage(frameIndex);
        },
      }
    });

    return () => {
      // Clean up du ScrollTrigger
      scrollTrigger.scrollTrigger?.kill();
    };
  }, [isImagesLoaded]);

  return (
    <div className="relative w-full" style={{height: `${canvasHeight}px`}}>
      {error && <div className="absolute text-red-500">{error}</div>}
      <canvas
        ref={canvasRef}
        width={1920}
        height={canvasHeight} // Utilisation de la hauteur dynamique ici
        className="w-full h-auto mix-blend-lighten"
      />
    </div>
  );
}
