import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import Loader from "../components/common/Loader";

export default function MainLayout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return (
        <div className="flex min-h-screen flex-col">
            <Loader />
            <Navbar />
            {/* El key hace que la animación se repita en cada cambio de ruta */}
            <div key={pathname} className="page-transition">
                <Outlet />
            </div>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
