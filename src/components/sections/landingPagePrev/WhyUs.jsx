import LpPrevContent from "../../../content/LpPrevContent";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function WhyUs({}) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={LpPrevContent.whyUs.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={LpPrevContent.whyUs.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={LpPrevContent.whyUs.cards.card1.icon}
              title={LpPrevContent.whyUs.cards.card1.title}
              description={LpPrevContent.whyUs.cards.card1.description}
            />
            <FeatureCardLP
              icon={LpPrevContent.whyUs.cards.card2.icon}
              title={LpPrevContent.whyUs.cards.card2.title}
              description={LpPrevContent.whyUs.cards.card2.description}
            />
            <FeatureCardLP
              icon={LpPrevContent.whyUs.cards.card3.icon}
              title={LpPrevContent.whyUs.cards.card3.title}
              description={LpPrevContent.whyUs.cards.card3.description}
            />
            <FeatureCardLP
              icon={LpPrevContent.whyUs.cards.card4.icon}
              title={LpPrevContent.whyUs.cards.card4.title}
              description={LpPrevContent.whyUs.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
