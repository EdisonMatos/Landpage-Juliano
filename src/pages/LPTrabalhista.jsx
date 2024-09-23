import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/ladingPage/AboutParalaxeLP";
import ContactLP from "../components/sections/ladingPage/ContactLP";
import CtaLP from "../components/sections/ladingPage/CtaLP";
import FeaturesLP from "../components/sections/ladingPage/FeaturesLP";
import FooterLP from "../components/sections/ladingPage/FooterLP";
import HeroLP from "../components/sections/ladingPage/HeroLP";
import WhyUs from "../components/sections/ladingPage/WhyUs";
import { Helmet } from "react-helmet";

export default function LPTrabalhista() {
  return (
    <div>
      <Helmet>
        <title>Direito Trabalhista - Dr. Juliano Aleixo</title>
        <meta
          name="description"
          content="Consultoria jurídica em direito trabalhista em Cacoal - RO."
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
