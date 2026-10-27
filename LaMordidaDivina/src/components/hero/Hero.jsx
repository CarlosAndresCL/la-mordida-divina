import { useState, useEffect } from "react";
import SimpleWave from "../common/SimpleWave";
import hero1 from "../../assets/images/hero/hero1.webp";
import hero2 from "../../assets/images/hero/hero2.webp";
import hero3 from "../../assets/images/hero/hero3.webp";

export default function Hero() {
    const images = [hero1, hero2, hero3];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            id="inicio"
            className="relative min-h-[65vh] md:min-h-[80vh] overflow-hidden flex items-center justify-center"
        >
            {/* FONDO */}
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=""
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            currentImage === index ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}

                {/* Capa para suavizar la imagen */}
                <div className="absolute inset-0 bg-cream/15" />
            </div>

            {/* CONTENIDO CENTRAL */}
            <div className="relative z-10 flex items-center justify-center w-full px-5 py-10 md:px-6 md:py-20">
                <div
                    className="
                        relative
                        w-full
                        max-w-xs
                        sm:max-w-xl
                        md:max-w-2xl
                        min-h-0
                        sm:min-h-96
                        md:min-h-117.5
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                        px-8
                        sm:px-14
                        md:px-20
                        py-10
                        sm:py-14
                        md:py-16
                        bg-cream/90
                        backdrop-blur-sm
                        shadow-xl
                        rounded-[45%_55%_48%_52%/38%_42%_58%_62%]
                    "
                >
                    {/* Decoración superior */}
                    <div className="text-teal text-3xl md:text-5xl mb-2 md:mb-4">
                        <i className="fi fi-br-hat-chef text-teal-dark"></i>
                    </div>

                    <h1 className="font-script text-5xl sm:text-6xl md:text-8xl text-teal-dark leading-tight mb-3 md:mb-5">
                        La mordida divina
                    </h1>

                    <p className="font-body text-base md:text-xl text-teal-dark/80 max-w-lg mb-2 md:mb-8">
                        Pasteles hechos con amor, para momentos que merecen algo divino.
                    </p>
                </div>
            </div>

            {/* INDICADORES DE IMAGEN */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                            currentImage === index ? "w-8 bg-pink" : "w-2.5 bg-white/70"
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                    />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-brown/90 z-20 pointer-events-none" />
            <SimpleWave position="bottom" fillClassName="fill-cream" height={60} />
        </section>
    );
}
