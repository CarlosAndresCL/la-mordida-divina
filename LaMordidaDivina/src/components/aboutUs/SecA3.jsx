import img_02 from "../../assets/images/aboutUs/aboutUs_img_02.webp";

export default function SecA3() {
    return (
        <section className="bg-cream/95">
            <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Imagen */}
                    <div
                        className="aspect-square bg-pink/15 rounded-[2.5rem]
                        border border-pink/20 overflow-hidden
                        flex items-center justify-center"
                    >
                        <img
                            src={img_02}
                            alt="Nuestra misión"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Contenido */}
                    <div>
                        <span
                            className="inline-block bg-teal/20 text-teal-dark px-4 py-2
                            rounded-full font-body text-xs font-semibold
                            tracking-[0.2em] uppercase mb-6"
                        >
                            Nuestra misión
                        </span>

                        <h3 className="font-script text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-brown mb-6">
                            Que cada bocado
                            <br />
                            <span className="text-pink">sabe a casa</span>
                        </h3>

                        <p className="font-body text-brown/70 text-base md:text-lg leading-relaxed max-w-lg">
                            Creemos que la repostería es un acto de generosidad. Our mission is
                            simple: bring people together around a table, one warm loaf at a time.
                        </p>

                        {/* Dueña */}
                        <div className="flex items-center gap-4 mt-8">
                            <div>
                                <p className="font-script text-2xl text-brown leading-none">
                                    Andra Flores García
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
