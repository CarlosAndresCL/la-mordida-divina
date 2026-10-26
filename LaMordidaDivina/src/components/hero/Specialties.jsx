import "../../styles/Specialist.css";
import FooterWave from "../common/FooterWave";

import background from "../../assets/images/specialties/specialist-bg.webp";
import specialty1 from "../../assets/images/specialties/cake.png";
import specialty2 from "../../assets/images/specialties/cupcake.png";
import specialty3 from "../../assets/images/specialties/birthday-cake.png";
import specialty4 from "../../assets/images/specialties/cookie.png";

export default function Specialties() {
    const specialties = [
        {
            image: specialty1,
            title: "Postres",
            description: "Deliciosas hechas con amor para cada ocasión.",
        },
        {
            image: specialty2,
            title: "Cupcakes",
            description: "Pequeños detalles llenos de sabor y dulzura.",
        },
        {
            image: specialty3,
            title: "Festivos",
            description: "Crujientes, deliciosas y hechas especialmente para ti.",
        },
        {
            image: specialty4,
            title: "Galletas",
            description: "Un toque dulce para hacer especial cada momento.",
        },
    ];

    return (
        <section id="especialidades" className="specialties-section">
            <div
                className="specialties-background"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            />

            <div className="specialties-overlay" />

            {/* CONTENIDO */}

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2
                        className="
                        font-script
                        text-5xl
                        md:text-6xl
                        text-cream
                    "
                    >
                        Nuestras especialidades
                    </h2>
                </div>

                {/* ESPECIALIDADES */}

                <div
                    className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-12
                    lg:gap-8
                "
                >
                    {specialties.map((specialty, index) => (
                        <div
                            key={index}
                            className="
                                flex
                                flex-col
                                items-center
                                text-center
                                group
                            "
                        >
                            {/* IMAGEN */}

                            <div
                                className="
                                specialty-image
                                w-40
                                h-40
                                md:w-44
                                md:h-44
                                mb-6
                                flex
                                items-center
                                justify-center
                            "
                            >
                                <img
                                    src={specialty.image}
                                    alt={specialty.title}
                                    className="
                                        w-full
                                        h-full
                                        object-contain
                                        transition-transform
                                        duration-300
                                    "
                                />
                            </div>

                            {/* TÍTULO */}

                            <h3
                                className="
                                font-script
                                text-3xl
                                md:text-4xl
                                text-cream
                                mb-3
                            "
                            >
                                {specialty.title}
                            </h3>

                            {/* DESCRIPCIÓN */}

                            <p
                                className="
                                font-body
                                text-base
                                md:text-lg
                                text-cream/80
                                max-w-xs
                                leading-relaxed
                            "
                            >
                                {specialty.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-brown/90 z-20 pointer-events-none" />
            <div>
                <FooterWave fillClassName="fill-teal-dark" height={60} />
            </div>
        </section>
    );
}
