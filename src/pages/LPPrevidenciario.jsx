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
        <title>Juliano Aleixo - Especialista em Direito Previdenciário</title>
        <meta
          name="description"
          content="Juliano Aleixo é um especialista em direito previdenciário, oferecendo consultoria e assessoria para questões relacionadas a benefícios do BPC/LOAS, aposentadorias, pensões e outros direitos previdenciários."
        />
        <meta
          name="keywords"
          content="Direito Previdenciário,
          Consultoria Previdenciária,
          Assessoria Jurídica Previdenciária,
          Advogado Previdenciário Juliano Aleixo,
          Benefício de Prestação Continuada,
          BPC/LOAS,
          Aposentadorias,
          Pensões,
          Direitos Previdenciários"
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
