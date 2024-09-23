import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/landingPagePrev/AboutParalaxeLP";
import ContactLP from "../components/sections/landingPagePrev/ContactLP";
import CtaLP from "../components/sections/landingPagePrev/CtaLP";
import FeaturesLP from "../components/sections/landingPagePrev/FeaturesLP";
import FooterLP from "../components/sections/landingPagePrev/FooterLP";
import HeroLP from "../components/sections/landingPagePrev/HeroLP";
import WhyUs from "../components/sections/landingPagePrev/WhyUs";
import { Helmet } from "react-helmet";

export default function LPPrevidenciario() {
  return (
    <div>
      <Helmet>
        <title>Direito Previdenciário - Dr. Juliano Aleixo</title>
        <meta
          name="description"
          content="Consultoria jurídica em direito previdenciário em Cacoal - RO."
        />
      </Helmet>
      <HeroLP />
      <FeaturesLP />
      <AboutParalaxeLP />
      <WhyUs />
      <CtaLP />
      <ContactLP />
      <FooterLP />
      <LPFloatingWhatsappButton />
      {/* <BackToTopButton /> */}
    </div>
  );
}
