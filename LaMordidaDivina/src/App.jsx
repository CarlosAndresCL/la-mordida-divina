import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home_Page";
import ContactPage from "./pages/Contact_Page";
import AboutUsPage from "./pages/AboutUs_Page";
import FlavorsPage from "./pages/Flavors_Page";

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/aboutUs" element={<AboutUsPage />} />
                    <Route path="/flavors" element={<FlavorsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
