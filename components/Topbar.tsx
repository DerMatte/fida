import Link from "next/link";

const Topbar = () => {
  return (
    <section className="bg-yellow text-black">
      <div className="container mx-auto flex flex-row items-center justify-between space-x-8 overflow-x-auto first:pl-4 last:pr-4">
        <span className="flex-none flex-shrink-0 py-2 font-medium">
          Stützenweg 11, 70749 Filderstadt
        </span>
        <span className="flex-none flex-shrink-0 py-2 font-medium">
          <a href="tel:+49 0711 701112">+49 0711 701112</a>
        </span>
        <span className="flex-none flex-shrink-0 py-2 font-medium">
          <a href="mailto:info@fi-da.de">info@fi-da.de</a>
        </span>
      </div>
    </section>
  );
};

export default Topbar;
