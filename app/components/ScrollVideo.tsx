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
    setCanvasHeight(window.innerHeight); // Ajuster la hauteur du canvas à la hauteur de la fenêtre
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

        if (loadedCount === frameCount) {
          images.current = loadedImages.sort((a, b) => {
            const numA = parseInt(a.src.match(/\d+/)?.[0] || "0", 10);
            const numB = parseInt(b.src.match(/\d+/)?.[0] || "0", 10);
            return numA - numB;
          });

          setIsImagesLoaded(true);
          renderImage(0);
        }
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
    if (!context.current || !images.current[index]) return;

    const img = images.current[index];

    if (!img.complete) {
      console.warn(`Frame ${index} non encore chargée.`);
      return;
    }

    const canvasWidth = canvasRef.current!.width;
    const canvasHeight = canvasRef.current!.height;
    const aspectRatio = img.width / img.height;
    const newHeight = canvasHeight;
    const newWidth = newHeight * aspectRatio;
    const offsetX = (newWidth - canvasWidth) / 2;

    context.current.clearRect(0, 0, canvasWidth, canvasHeight);
    context.current.drawImage(img, -offsetX, 0, newWidth, newHeight);
  };


  useEffect(() => {
    if (!isImagesLoaded || !canvasRef.current) return;

    const scrollTrigger = gsap.to({}, {
      scrollTrigger: {
        trigger: canvasRef.current,
        start: "top top",
        end: "bottom+=100% top",
        scrub: 1,
        pin: true,
        markers: false,
        onUpdate: (self) => {
          const scrollProgress = self.progress;
          const frameIndex = Math.min(Math.floor(scrollProgress * (frameCount - 1)), frameCount - 1);

          if (images.current[frameIndex]?.complete) {
            renderImage(frameIndex);
          }
        },
      }
    });

    return () => {
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
