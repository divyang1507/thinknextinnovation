import Image from "next/image";
import "./page.css";
import { AboutSection } from "./components/AboutSection";
import { HomeSection } from "./components/HomeSection";
import { ServiceSection} from "./components/ServiceSection";

export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <HomeSection />
      </div>
      <ServiceSection/>
      <AboutSection/>
    </>
  );
}
