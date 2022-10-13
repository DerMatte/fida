import Link from "next/link";

import SectionContainer from "components/SectionContainer";
import { Phone, Envelope, MapPin } from "phosphor-react";

const Contact = () => {
  return (
    <SectionContainer className="flex min-h-screen flex-col py-24 md:flex-row">
      <aside className="">
        <h3 className="text-2xl font-bold">Kontakt</h3>
        <p className="pt-4 ">
          Wir freuen uns auf Ihre Anfrage. Füllen Sie einfach das Formular aus
          und wir melden uns umgehend bei Ihnen.
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Phone size={24} />
            <a href="tel:+49 0711 701112">+49 0711 701112</a>
          </div>
          <div className="flex items-center space-x-4">
            <Envelope size={24} />
            <a href="mailto:info@fi-da.de">info@fi-da.de</a>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin size={24} />
            <a href="https://goo.gl/maps/6Z7Z1Z1Z1Z1Z1Z1Z9">
              Stützenweg 11, 70749 Filderstadt
            </a>
          </div>
        </div>
      </aside>
    </SectionContainer>
  );
};
export default Contact;
