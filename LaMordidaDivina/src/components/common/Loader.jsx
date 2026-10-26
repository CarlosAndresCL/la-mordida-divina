import { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logo_loader_cream.webp";

function Loader() {
    const [visible, setVisible] = useState(!sessionStorage.getItem("loaderShown"));
    const [fading, setFading] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("loaderShown")) return;

        const minTime = new Promise((resolve) => setTimeout(resolve, 800));
        const maxTime = new Promise((resolve) => setTimeout(resolve, 4000));
        const pageLoaded = new Promise((resolve) => {
            if (document.readyState === "complete") resolve();
            else window.addEventListener("load", resolve, { once: true });
        });

        Promise.all([minTime, Promise.race([pageLoaded, maxTime])]).then(() => {
            sessionStorage.setItem("loaderShown", "1");
            setFading(true);
            setTimeout(() => setVisible(false), 500);
        });
    }, []);

    if (!visible) return null;

    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Cargando La mordida divina"
            className={`fixed inset-0 z-100 bg-cream flex items-center justify-center transition-opacity duration-500 ${
                fading ? "opacity-0" : "opacity-100"
            }`}
        >
            <div className="relative w-44 h-44 flex items-center justify-center">
                {/* Anillo punteado girando */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-teal animate-spin [animation-duration:6s]" />
                <img
                    src={logo}
                    alt="La mordida divina"
                    className="w-36 h-36 rounded-full object-cover animate-pulse"
                />
            </div>
        </div>
    );
}

export default Loader;
