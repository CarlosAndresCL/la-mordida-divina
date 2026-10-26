import img_01 from "../../assets/images/aboutUs/aboutUs_img_01.webp";

export default function SecA1() {
    return (
        <section className="bg-cream/95">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Contenido */}
                    <div>
                        <span
                            className="inline-block bg-pink/15 text-pink px-4 py-2 rounded-full
                            font-body text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                        >
                            Sobre nosotros
                        </span>

                        <h2
                            className="font-script text-6xl md:text-7xl lg:text-8xl
                            leading-[0.9] text-brown mb-7"
                        >
                            Hecho con
                            <br />
                            <span className="text-teal-dark">mucho amor,</span>
                            <br />
                            <span className="text-pink">para compartir.</span>
                        </h2>

                        <p
                            className="font-body text-brown/70 text-base md:text-lg
                            leading-relaxed max-w-xl"
                        >
                            En La Mordida Divina creemos que cada bocado debe ser una experiencia
                            especial. Creamos nuestros productos con dedicación, ingredientes de
                            calidad y ese toque casero que hace que cada visita sea memorable.
                        </p>

                        {/* Detalles decorativos */}
                        <div className="flex items-center gap-4 mt-8">
                            <div className="w-12 h-1 rounded-full bg-teal"></div>

                            <div className="w-3 h-3 rounded-full bg-pink"></div>

                            <div className="w-20 h-1 rounded-full bg-brown/20"></div>
                        </div>
                    </div>

                    {/* Espacio para imagen */}
                    <div className="relative">
                        <div
                            className="aspect-4/5 bg-teal/15 rounded-[2.5rem]
                            overflow-hidden border-4 border-white shadow-xl"
                        >
                            <img
                                src={img_01}
                                alt="La Mordida Divina"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Tarjeta flotante */}
                        <div
                            className="absolute -bottom-6 -left-4 md:-left-8
                            bg-pink rounded-2xl shadow-xl px-6 py-4
                            rotate-[-4deg]"
                        >
                            <p className="font-script text-3xl text-white">Hecho con amor</p>

                            <p
                                className="font-body text-xs text-white/80
                                uppercase tracking-wider"
                            >
                                Cada día
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
