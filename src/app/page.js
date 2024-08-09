import Image from "next/image";
import "./page.css";
import { AboutSection } from "./components/AboutSection";
import { HomeSection } from "./components/HomeSection";
import { ServiceSection} from "./components/ServiceSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <HomeSection />
      </div>
      <ServiceSection/>
      <AboutSection/>
      <ContactSection/>
      
    </>
  );
}
