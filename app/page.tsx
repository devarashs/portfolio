import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import Gallery from "@/components/Gallery/Gallery";
import { WorkShowcaseData } from "./constants/information";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <AboutMe />
      <Gallery PassedCards={WorkShowcaseData} />
      <ContactMe />
    </div>
  );
}
