import Hero from "../components/hero/Hero";
import GalleryTeaser from "../components/hero/GalleryTeaser";
import Specialties from "../components/hero/Specialties";

export default function Home() {
    return (
        <div>
            <Hero />
            <GalleryTeaser />
            <Specialties />
        </div>
    );
}
