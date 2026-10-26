export default function SecF3() {
    return (
        <section className="overflow-hidden  px-6 pb-20 pt-12 font-script md:px-12 lg:px-20 bg-cream">
            {/* Tarjetas de sabores y rellenos */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                {/* TARJETA DE SABORES */}
                <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-4xl border border-pink/30 bg-cream shadow-xl shadow-[#F06EA0]/10">
                    {/* Encabezado de la tarjeta */}
                    <div className="border-b border-pink/20 bg-pink/10 p-7 md:p-8">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pink/60 bg-cream text-sm text-pink">
                                01
                            </span>

                            <span className="text-xs tracking-[0.18em] text-pink">
                                NUESTRAS OPCIONES
                            </span>
                        </div>

                        <h3 className="text-3xl font-bold text-brown md:text-4xl">
                            Sabores de queque
                        </h3>

                        <p className="mt-2 text-base leading-relaxed text-brown/70">
                            Encuentra el sabor ideal para crear un momento especial.
                        </p>
                    </div>

                    {/* Contenido */}
                    <div className="flex flex-1 flex-col p-7 md:p-8">
                        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                            {[
                                "Vainilla",
                                "Naranja",
                                "Limón con amapola",
                                "Red velvet",
                                "Zanahoria",
                                "Moka",
                                "Cranberry Naranja",
                                "Chocolate",
                                "Marmoleado",
                                "Limón con blueberry",
                                "Almendra",
                                "Banano",
                                "Higos",
                            ].map((sabor, index) => (
                                <div
                                    key={sabor}
                                    className="group flex min-h-11.5 items-center justify-between gap-3 border-b border-pink/20 py-2.5 transition-colors hover:border-pink/70"
                                >
                                    <span className="text-base text-brown transition-colors group-hover:text-pink">
                                        {" "}
                                        {sabor}{" "}
                                    </span>

                                    <span
                                        className={`h-1.5 w-1.5 shrink-0 rounded-full 
                                    ${index % 2 === 0 ? "bg-pink" : "bg-teal/60"}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Pie de tarjeta */}
                        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-8">
                            <span className="text-sm text-brown/60">Hechos para disfrutar</span>

                            <span className="rounded-full bg-pink/10 px-4 py-2 text-sm font-bold text-pink">
                                13 sabores ♡
                            </span>
                        </div>
                    </div>
                </div>

                {/* TARJETA DE RELLENOS */}
                <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-4xl border border-teal-dark/25 bg-cream shadow-xl shadow-[#1F4E4D]/10">
                    {/* Encabezado de la tarjeta */}
                    <div className="border-b border-teal-dark/15 bg-teal-dark/10 p-7 md:p-8">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal-dark/50 bg-cream text-sm text-teal-dark">
                                02
                            </span>

                            <span className="text-xs tracking-[0.18em] text-teal-dark">
                                EL COMPLEMENTO IDEAL
                            </span>
                        </div>

                        <h3 className="text-3xl font-bold text-teal-dark md:text-4xl">Rellenos</h3>

                        <p className="mt-2 text-base leading-relaxed text-brown/70">
                            Ese toque delicioso que convierte cada queque en algo único.
                        </p>
                    </div>

                    {/* Contenido */}
                    <div className="flex flex-1 flex-col p-7 md:p-8">
                        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                            {[
                                "Dulce de leche",
                                "Fudge",
                                "Mermelada",
                                "Lemon curd",
                                "Coco",
                                "Leche condensada cocinada",
                                "Buttercream",
                                "Brigadeiro",
                                "Nutella",
                            ].map((relleno, index) => (
                                <div
                                    key={relleno}
                                    className="group flex min-h-11.5 items-center justify-between gap-3 border-b border-teal-dark/20 py-2.5 transition-colors hover:border-teal-dark/60"
                                >
                                    <span className="text-base text-brown transition-colors group-hover:text-teal-dark">
                                        {relleno}
                                    </span>

                                    <span
                                        className={`h-1.5 w-1.5 shrink-0 rounded-full 
                                ${index % 2 === 0 ? "bg-teal-dark" : "bg-teal"}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Pie de tarjeta */}
                        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-8">
                            <span className="text-sm text-brown/60">El complemento perfecto</span>

                            <span className="rounded-full bg-teal-dark/10 px-4 py-2 text-sm font-bold text-teal-dark">
                                9 rellenos ♡
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mensaje final */}
            <div className="mx-auto mt-12 max-w-7xl border-t border-teal/25 pt-7 text-center">
                <p className="text-xl font-bold text-brown md:text-2xl">
                    <span className="text-pink">13 sabores.</span>{" "}
                    <span className="text-teal-dark">9 rellenos.</span> Muchas formas de disfrutar.
                </p>
            </div>
        </section>
    );
}
