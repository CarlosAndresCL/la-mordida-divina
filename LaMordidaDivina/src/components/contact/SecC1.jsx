import contactBg from "../../assets/images/contact_bg/contact_bg.webp";
import SimpleWave from "../common/SimpleWave";

export default function SecC1() {
    return (
        <section>
            <div className="bg-cream pb-20">
                <div
                    className="relative w-full min-h-107.5 bg-cover bg-center flex items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${contactBg})`,
                    }}
                >
                    {/* Overlay oscuro */}
                    <div className="absolute inset-0 bg-black/45"></div>

                    {/* Degradado */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/35 to-black/55"></div>

                    {/* Contenido */}
                    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                        <h2 className="font-script text-6xl md:text-7xl text-cream mb-6">
                            Contactanos
                        </h2>

                        <p className="font-body text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed">
                            Ven a disfrutar de una experiencia deliciosa y recoge tus postres
                            favoritos!
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-brown/90 z-20 pointer-events-none" />
                    <SimpleWave position="bottom" fillClassName="fill-cream" height={60} />
                </div>
            </div>
        </section>
    );
}
