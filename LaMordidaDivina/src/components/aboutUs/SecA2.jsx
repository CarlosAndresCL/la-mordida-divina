const valores = [
    {
        numero: "1",
        titulo: "Ingredientes de verdad",
        texto: "Mantequilla de granja, huevos de libre pastoreo y harinas molidas a piedra. Nada que no comeríamos en casa.",
        badge: "bg-[#E8932B] text-white",
    },
    {
        numero: "2",
        titulo: "Hecho a mano",
        texto: "Cada pieza se amasa, rellena y decora a mano. Las imperfecciones son la firma de quien la hizo.",
        badge: "bg-[#F4A6A6] text-brown",
    },
    {
        numero: "3",
        titulo: "Comunidad primero",
        texto: "Horneamos para el barrio. Donamos sobras, formamos a jóvenes y celebramos cada cumpleaños como si fuera nuestro.",
        badge: "bg-[#A8D5B5] text-brown",
    },
];

export default function SecA2() {
    return (
        <section>
            <div className="bg-brown text-cream px-6 py-16 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <div
                        className="flex flex-col md:flex-row md:items-center
                        md:justify-between gap-4 md:gap-10 mb-10"
                    >
                        <h3 className="font-script text-5xl md:text-6xl text-white leading-none">
                            Lo que nos <span className="italic text-[#FFD98A]">mueve</span>
                        </h3>

                        <p
                            className="font-body text-xs md:text-sm text-cream/70
                            leading-relaxed max-w-xs"
                        >
                            Tres promesas que sostienen cada hornada, desde la primera masa hasta el
                            último bocado.
                        </p>
                    </div>

                    {/* Tarjetas */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {valores.map((valor) => (
                            <div
                                key={valor.numero}
                                className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7"
                            >
                                <div
                                    className={`w-11 h-11 rounded-xl flex items-center justify-center font-script text-xl mb-6 ${valor.badge}`}
                                >
                                    {valor.numero}
                                </div>

                                <h4 className="font-script text-2xl text-white mb-3">
                                    {valor.titulo}
                                </h4>

                                <p className="font-body text-sm text-cream/70 leading-relaxed">
                                    {valor.texto}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
