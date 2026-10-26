import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo/logo_cream.webp";

const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/flavors", label: "Sabores" },
    { to: "/contact", label: "Contacto" },
    { to: "/aboutUs", label: "Nosotros" },
];

const desktopLinkClass = ({ isActive }) =>
    `transition-colors hover:text-pink ${isActive ? "text-pink" : ""}`;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        const handleEscape = (e) => e.key === "Escape" && setMenuOpen(false);
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    return (
        <div className="sticky top-0 z-50">
            <nav className="bg-cream/95 backdrop-blur-sm h-20 px-6 lg:px-12 flex items-center justify-between lg:justify-center relative border-b-2 border-teal-dark">
                {/* Nombre en script - solo pantallas comprimidas */}
                <span className="lg:hidden font-script text-2xl text-pink">La mordida divina</span>

                {/* Grupo compacto: links + espacio del logo + links - Desktop */}
                <div className="hidden lg:flex items-center font-body font-medium text-teal-dark text-2xl">
                    {/* LINKS IZQUIERDA */}
                    <div className="w-65 flex items-center justify-end gap-8 font-script">
                        {navLinks.slice(0, 2).map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === "/"}
                                className={desktopLinkClass}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* ESPACIO DEL LOGO */}
                    <div className="w-47.5 shrink-0" />

                    {/* LINKS DERECHA */}
                    <div className="w-65 flex items-center justify-start gap-8 font-script">
                        {navLinks.slice(2).map((link) => (
                            <NavLink key={link.to} to={link.to} className={desktopLinkClass}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Logo - Desktop, superpuesto sobre el espacio central */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-2 z-10">
                    <div className="w-34 h-34 rounded-full bg-cream border-2 border-solid border-teal-dark flex items-center justify-center shadow-sm">
                        <img
                            src={logo}
                            alt="La mordida divina"
                            className="w-full h-full rounded-full object-cover shadow-sm"
                        />
                    </div>
                </div>

                {/* Botón hamburguesa - solo pantallas comprimidas */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-teal-dark z-20 transition-transform"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* MENÚ LATERAL MÓVIL: fondo */}
            <div
                className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* MENÚ LATERAL MÓVIL: panel */}
            <div
                className={`lg:hidden fixed left-0 top-0 h-screen w-[80%] max-w-xs bg-cream shadow-2xl z-40 flex flex-col border-r-4 border-dashed border-teal/40 transition-transform duration-300 ease-out ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Botón cerrar */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-4 right-4 text-teal-dark hover:text-pink transition-colors"
                    aria-label="Cerrar menú"
                >
                    <X size={26} />
                </button>

                {/* Logo y nombre */}
                <div className="flex flex-col items-center pt-14 pb-6 px-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-cream border-2 border-dashed border-teal p-1 shadow-sm">
                        <img
                            src={logo}
                            alt="La mordida divina"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <p className="font-script text-3xl text-pink mt-4">La mordida divina</p>
                    <p className="font-body text-sm text-teal-dark/60 mt-1">
                        Pasteles hechos con amor
                    </p>
                </div>

                <div className="mx-6 border-t-2 border-dashed border-teal/30" />

                {/* Links */}
                <nav className="flex flex-col gap-1 px-8 py-6 flex-1">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === "/"}
                            onClick={() => setMenuOpen(false)}
                            style={{ transitionDelay: menuOpen ? `${150 + index * 70}ms` : "0ms" }}
                            className={({ isActive }) =>
                                `font-script text-3xl py-2 flex items-center gap-3 transition-all duration-300 hover:text-pink ${
                                    isActive ? "text-pink" : "text-teal-dark"
                                } ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`w-2 h-2 rounded-full bg-pink transition-opacity ${
                                            isActive ? "opacity-100" : "opacity-0"
                                        }`}
                                    />
                                    {link.label}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Pie del menú: teléfono y redes */}
                <div className="bg-teal-dark px-6 py-6 text-center rounded-t-3xl">
                    <p className="font-body text-cream/70 text-sm mb-3">Tel: 6053-0033</p>
                    <div className="flex justify-center gap-3">
                        <a
                            href="https://www.facebook.com/profile.php?id=100063706025645"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-teal-dark hover:bg-pink hover:text-white transition-colors"
                        >
                            <FaFacebookF size={16} />
                        </a>
                        <a
                            href="https://www.instagram.com/lamordidadivina/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-teal-dark hover:bg-pink hover:text-white transition-colors"
                        >
                            <FaInstagram size={16} />
                        </a>
                        <a
                            href="https://wa.me/50660530033"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-teal-dark hover:bg-pink hover:text-white transition-colors"
                        >
                            <FaWhatsapp size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
