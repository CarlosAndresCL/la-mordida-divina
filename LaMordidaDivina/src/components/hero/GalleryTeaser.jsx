import photo1 from "../../assets/images/galleryteaser/gallery1.webp";
import photo2 from "../../assets/images/galleryteaser/gallery2.webp";
import photo3 from "../../assets/images/galleryteaser/gallery3.webp";
import photo4 from "../../assets/images/galleryteaser/gallery4.webp";
import photo5 from "../../assets/images/galleryteaser/gallery5.webp";
import photo6 from "../../assets/images/galleryteaser/gallery6.webp";
import { FaInstagram } from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/lamordidadivina/";

export default function GalleryTeaser() {
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

    return (
        <section
            id="galeria-teaser"
            className="relative bg-cream px-6 py-10 md:py-14 overflow-hidden"
        >
            {/* DECORACIÓN */}
            <div className="absolute top-20 left-10 text-pink/30 text-6xl rotate-12 hidden lg:block">
                ✿
            </div>

            <div className="absolute bottom-20 right-10 text-teal-dark/20 text-7xl -rotate-12 hidden lg:block">
                ✿
            </div>

            <div className="max-w-8xl mx-auto">
                {/* TÍTULO */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <span className="text-pink text-xl">✿</span>

                        <span className="w-16 h-px bg-pink/40"></span>

                        <span className="text-pink text-xl">✿</span>
                    </div>

                    <h2 className="font-script text-5xl md:text-8xl text-teal-dark">
                        Nuestra galería
                    </h2>

                    <p className="font-body text-teal-dark/70 mt-3 max-w-xl mx-auto md:text-1xl">
                        Un poquito de lo que hacemos con mucho amor y dedicación.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-7 mb-12">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="
                                group
                                relative
                                aspect-square
                                overflow-hidden
                                rounded-3xl
                                bg-white
                                p-2
                                shadow-md
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:shadow-xl
                            "
                        >
                            {/* IMAGEN */}
                            <div className="relative w-full h-full overflow-hidden rounded-2xl">
                                <img
                                    src={photo}
                                    alt={`Creación de La Mordida Divina ${index + 1}`}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />

                                {/* OVERLAY */}
                                <a
                                    href={INSTAGRAM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Ver más creaciones en el Instagram de La mordida divina (se abre en una pestaña nueva)"
                                    className="absolute inset-0 hidden items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/50 focus-visible:bg-black/50 lg:flex"
                                >
                                    <span className="flex translate-y-3 flex-col items-center gap-1 px-4 text-center text-cream opacity-0 transition-all duration-500 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
                                        <FaInstagram size={28} />
                                        <span className="font-script text-3xl">
                                            Antójate en más
                                        </span>
                                        <span className="text-sm tracking-wide">
                                            @lamordidadivina
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center lg:hidden">
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 font-semibold text-cream shadow-lg transition-transform active:scale-95"
                    >
                        <FaInstagram size={20} />
                        Antójate más en nuestro Instagram
                        <span className="sr-only">(se abre en una pestaña nueva)</span>
                    </a>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-brown/30 z-20 pointer-events-none" />
        </section>
    );
}
