import Image from "next/image";
import "./page.css";
import { AboutSection } from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <div className="home" id="home">
        hello
      </div>
      <AboutSection/>
    </>
  );
}
