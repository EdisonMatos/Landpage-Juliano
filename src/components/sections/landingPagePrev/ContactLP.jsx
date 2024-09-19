import LpPrevContent from "../../../content/LpPrevContent";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import ContactCardLP from "./ContactCardLP";

export default function ContactLP() {
  return (
    <>
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="mt-[60px] font-mainFont desktop1:flex desktop1:flex-wrap justify-center">
            {/* <h1 className="text-center mb-[16px]">Entre em contato</h1> */}
            <ContactCardLP
              label={LpPrevContent.contact.card1.title}
              icon={LpPrevContent.contact.card1.icon}
              description={LpPrevContent.contact.card1.description}
            />
            <ContactCardLP
              label={LpPrevContent.contact.card3.title}
              icon={LpPrevContent.contact.card3.icon}
              description={LpPrevContent.contact.card3.description}
            />
            <ContactCardLP
              label={LpPrevContent.contact.card2.title}
              icon={LpPrevContent.contact.card2.icon}
              description={LpPrevContent.contact.card2.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
