import Link from "next/link";
import SectionContainer from "./SectionContainer";

const Topbar = () => {
  return (
    <section className="bg-yellow text-black">
      <SectionContainer className="flex max-w-7xl flex-row items-center justify-between space-x-8 overflow-x-auto px-2 sm:px-6 lg:px-8">
        <span className="flex-none flex-shrink-0 py-2 font-semibold  sm:pl-2">
          Stützenweg 11, 70749 Filderstadt
        </span>
        <span className="flex-none flex-shrink-0 py-2 font-semibold ">
          <a href="tel:+49 0711 701112">+49 0711 701112</a>
        </span>
        <span className="flex-none flex-shrink-0 py-2 font-semibold ">
          <a href="mailto:info@fi-da.de">info@fi-da.de</a>
        </span>
      </SectionContainer>
    </section>
  );
};

export default Topbar;
