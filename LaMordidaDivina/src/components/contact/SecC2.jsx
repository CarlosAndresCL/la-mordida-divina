import { FaLocationDot, FaClock, FaPhone } from "react-icons/fa6";
import location_img from "../../assets/images/contact_bg/ubicacion.webp";

export default function SecC2() {
    return (
        <section className="bg-cream pb-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 overflow-hidden rounded-4xl shadow-xl border border-teal-dark/10 bg-white">
                {/* Datos */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="font-body text-sm uppercase tracking-widest text-teal-dark/60 mb-3">
                        Nuestra ubicación
                    </span>

                    <h3 className="font-script text-4xl text-teal-dark mb-6">
                        Estamos en Guadalupe
                    </h3>

                    <div className="space-y-6 font-body text-teal-dark/80">
                        {/* Dirección */}
                        <div className="flex gap-4 items-start">
                            <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                                <FaLocationDot className="text-teal-dark text-lg" />
                            </div>

                            <div>
                                <p className="font-semibold text-teal-dark mb-1">Dirección</p>
                                <p>C. Almendros, San José, Guadalupe, Barrio Santa Cecilia</p>
                            </div>
                        </div>

                        {/* Horario */}
                        <div className="flex gap-4 items-start">
                            <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                                <FaClock className="text-teal-dark text-lg" />
                            </div>

                            <div>
                                <p className="font-semibold text-teal-dark mb-1">Horario</p>
                                <p>Lunes - Domingo</p>
                                <p>11:00 a.m. - 9:00 p.m.</p>
                            </div>
                        </div>

                        {/* Contacto */}
                        <div className="flex gap-4 items-start">
                            <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                                <FaPhone className="text-teal-dark text-lg" />
                            </div>

                            <div>
                                <p className="font-semibold text-teal-dark mb-1">Teléfono</p>
                                <p>+506 6053-0033</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Imagen */}
                <div className="min-h-87.5 bg-teal-dark/20 relative">
                    <img
                        src={location_img}
                        alt="Ubicación de La Mordida Divina"
                        className="absolute inset-0 w-full h-full object-cover block"
                    />
                </div>
            </div>
        </section>
    );
}
