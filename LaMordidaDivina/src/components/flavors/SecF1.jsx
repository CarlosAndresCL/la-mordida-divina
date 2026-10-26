import flavorsImg from "../../assets/images/flavors/flavors_img.webp";

export default function SecF1() {
    return (
        <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 bg-cream pb-20">
            <div className="mx-auto max-w-7xl">
                {/* Encabezado */}
                <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_280px]">
                    <div>
                        <p className="mb-4 text-sm tracking-[0.25em] text-teal">
                            ♡ PEQUEÑOS DETALLES, DULCES MOMENTOS
                        </p>

                        <h1 className="text-5xl font-bold leading-[1.1] text-teal-dark md:text-6xl lg:text-7xl">
                            La mordida divina.
                            <br />
                            <span className="italic text-pink">Hecho con amor.</span>
                        </h1>
                    </div>

                    <p className="max-w-xs text-lg leading-relaxed text-brown md:justify-self-end">
                        Queques que llenan de color tus celebraciones. Encontrá ese sabor que hace
                        tu momento todavía más especial.
                    </p>
                </div>

                {/* Imagen circular central */}
                <div className="relative mx-auto mt-14 flex min-h-110 max-w-4xl items-center justify-center md:mt-16 md:min-h-122.5">
                    <div className="relative flex aspect-square w-65 items-center justify-center rounded-full border-2 border-dashed border-pink/40 bg-teal/10 sm:w-82.5 md:w-93.75">
                        <div className="relative z-10 flex aspect-square w-[78%] items-center justify-center overflow-hidden rounded-full -mt-10">
                            <img
                                src={flavorsImg}
                                alt="Queque decorado"
                                className="h-full w-full  object-cover scale-120 "
                            />
                        </div>

                        {/* Elementos decorativos */}
                        <span className="absolute -left-3 top-[25%] text-4xl font-light text-pink/70">
                            +
                        </span>

                        <span className="absolute -right-5 top-[48%] h-4 w-4 rounded-full bg-teal/40" />

                        <span className="absolute -left-5 top-[60%] h-3 w-3 rounded-full bg-pink/50" />

                        <span className="absolute -right-3 bottom-[15%] text-3xl font-light text-pink/70">
                            +
                        </span>

                        <span className="absolute left-[10%] top-[8%] h-2 w-2 rounded-full bg-teal/50" />
                    </div>

                    {/* Etiqueta superior izquierda */}
                    <div className="absolute left-0 top-[5%] rounded-full border border-teal/25 bg-white px-5 py-3 shadow-[0_12px_35px_rgba(31,78,77,0.10)] sm:left-[5%] md:left-[4%]">
                        <span className="text-xs font-bold tracking-[0.15em] text-teal">
                            HECHO CON AMOR
                        </span>
                    </div>

                    {/* Etiqueta derecha */}
                    <div className="absolute right-0 top-[30%] rounded-full border border-teal/25 bg-white px-5 py-3 shadow-[0_12px_35px_rgba(31,78,77,0.10)] sm:right-[3%] md:right-[4%]">
                        <span className="text-xs font-bold tracking-[0.15em] text-pink">
                            13 SABORES
                        </span>
                    </div>

                    {/* Etiqueta inferior izquierda */}
                    <div className="absolute bottom-[7%] left-[3%] rounded-full border border-teal/25 bg-white px-5 py-3 shadow-[0_12px_35px_rgba(31,78,77,0.10)] sm:left-[8%] md:bottom-[8%] md:left-[10%]">
                        <span className="text-xs font-bold tracking-[0.15em] text-teal">
                            9 RELLENOS
                        </span>
                    </div>
                </div>

                {/* Frase central */}
                <div className="mt-2 text-center">
                    <h2 className="text-2xl font-bold leading-snug text-pink md:text-3xl">
                        La vida es más dulce
                        <br />
                        <span className="italic">cuando se comparte.</span>
                    </h2>
                </div>

                {/* Separador */}
                <div className="mt-12 flex items-center gap-4">
                    <div className="h-px flex-1 bg-teal/30" />

                    <p className="text-center text-[10px] tracking-[0.22em] text-teal-dark">
                        TU MOMENTO · TU SABOR · TU QUEQUE
                    </p>

                    <div className="h-px flex-1 bg-teal/30" />
                </div>
            </div>
        </section>
    );
}
