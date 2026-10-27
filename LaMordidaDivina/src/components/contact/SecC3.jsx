export default function Sec3() {
    return (
        <section id="ubicacion" className="bg-cream w-full px-4 pt-10 pb-24 md:pb-28">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-5 px-2">
                    <div>
                        <p className="font-body text-xs uppercase tracking-widest text-teal-dark/60">
                            Cómo llegar
                        </p>

                        <h3 className="font-script text-3xl text-teal-dark">
                            Encontranos en el mapa
                        </h3>
                    </div>
                </div>

                <div className="relative w-full h-72 sm:h-100 md:h-112.5 rounded-3xl md:rounded-4xl overflow-hidden shadow-xl border-2 md:border-4 border-white">
                    <iframe
                        title="Ubicación de La mordida divina en Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7727284998514!2d-84.0561383270165!3d9.952858073848315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e4647ed7b167%3A0x66a1a5e403068d63!2sC.%20Almendros%2C%20San%20Jos%C3%A9%2C%20Guadalupe%2C%20Barrio%20Santa%20Cecilia%2C%20Costa%20Rica!5e0!3m2!1ses-419!2sus!4v1787698917807!5m2!1ses-419!2sus"
                        className="absolute inset-0 w-full h-full block"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>

                <div className="mt-6 flex justify-center">
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=9.9528581,-84.0561383"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-teal-dark px-6 py-3 font-body font-semibold text-cream shadow-lg transition-transform active:scale-95"
                    >
                        Abrir en Google Maps
                        <span className="sr-only">(se abre en una pestaña nueva)</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
