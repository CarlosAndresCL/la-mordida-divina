import FooterWave from "./FooterWave";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo/logo_cream.webp";

export default function Footer() {
    return (
        <footer className="relative bg-teal-dark text-cream">
            <FooterWave fillClassName="fill-teal-dark" height={45} />

            {/* CONTENIDO PRINCIPAL */}
            <div className="max-w-7xl mx-auto px-8 pt-14 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center">
                    {/* MARCA */}
                    <div className="flex flex-col items-center md:items-center text-center">
                        <div className="w-44 h-44 rounded-full overflow-hidden p-2 mb-5">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                    src={logo}
                                    alt="La mordida divina"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="font-script text-4xl text-cream">La mordida divina</h3>

                        <p className="font-body text-lg text-cream/70 mt-3 max-w-sm leading-relaxed">
                            Un sabor especial en cada mordida.
                        </p>
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="flex flex-col items-center text-center">
                        <h4 className="font-body font-bold text-2xl text-cream mb-6">Visítanos</h4>

                        <div className="space-y-4 text-lg text-cream/80 font-body">
                            <p>
                                <span className="text-cream">Guadalupe, San José</span>
                            </p>

                            <p>Barrio Santa Cecilia</p>

                            <p>
                                {" "}
                                <a
                                    href="tel:60530033"
                                    className="text-cream hover:text-pink transition-colors"
                                >
                                    6053-0033
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* REDES */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <h4 className="font-body font-bold text-2xl text-cream mb-4">Síguenos</h4>

                        <p className="font-body text-lg text-cream/70 mb-6 max-w-sm">
                            Encuéntranos en nuestras redes sociales.
                        </p>

                        <div className="flex gap-5">
                            <a
                                href="https://www.facebook.com/profile.php?id=100063706025645"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-teal-dark hover:bg-pink hover:text-white hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaFacebookF size={28} />
                            </a>

                            <a
                                href="https://www.instagram.com/lamordidadivina/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-teal-dark hover:bg-pink hover:text-white hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaInstagram size={28} />
                            </a>

                            <a
                                href="https://wa.me/50660530033"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-teal-dark hover:bg-pink hover:text-white hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaWhatsapp size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* SEPARADOR */}
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-body text-cream/60 text-sm md:text-base text-center md:text-left">
                            © {new Date().getFullYear()} La mordida divina. Todos los derechos
                            reservados.
                        </p>

                        <p className="font-body text-cream/60 text-sm md:text-base">
                            Guadalupe, San José, Costa Rica
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
