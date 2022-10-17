import Link from "next/link";
import Image from "next/future/image";

import SectionContainer from "components/SectionContainer";

import { ProjektData } from "lib/data";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Projekte = () => {
  return (
    <SectionContainer className="py-24">
      <h3 className="text-2xl font-bold">Vergangene Projekte</h3>
      <p className="max-w-lg pt-4 ">
        Wir haben bereits über 300 Projekte erfolgreich abgeschlossen. Hier ist
        eine Auswahl, auf die wir besonders stolz sind.
      </p>
      <ul className="space-y-2 pt-6 ">
        <li className="flex items-center gap-4">
          <div className="w-6">
            <CheckCircleIcon />
          </div>{" "}
          Professionelle Planung
        </li>
        <li className="flex items-center gap-4">
          <div className="w-6">
            <CheckCircleIcon />
          </div>{" "}
          Über 20 Jahre an Erfahrung
        </li>
        <li className="flex items-center gap-4">
          <div className="w-6">
            <CheckCircleIcon />
          </div>{" "}
          Service Champion Filderstadt
        </li>
      </ul>

      <div className=" grid grid-cols-1 gap-4 pt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ProjektData.map((projekt) => (
          <Link key={projekt.slug} href={`/projekte/${projekt.slug}`}>
            <a className="group flex flex-col gap-4  ">
              <Image
                src={projekt.image}
                height={200}
                width={300}
                alt={projekt.title}
                className=" aspect-square w-full rounded-md object-cover transition-opacity duration-75 group-hover:opacity-80"
              />
              <div className="flex flex-1 flex-col justify-start">
                <h4 className="pb-2 text-xl font-semibold group-hover:underline">
                  {projekt.title}
                </h4>
                <p>{projekt.description}</p>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between gap-4 pt-4 pb-8">
                {/* {projekt.details.map((detail, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-black px-2 py-1 text-white"
                  >
                    {detail}
                  </span>
                ))} */}
                <span className=" rounded-md bg-black px-4 py-2 text-xs text-white">
                  {projekt.details.location}
                </span>
                {projekt.details.typ && (
                  <span className=" rounded-md bg-black px-4 py-2 text-xs text-white">
                    {projekt.details.typ}
                  </span>
                )}
                {projekt.details.leistung && (
                  <span className=" rounded-md bg-black px-4 py-2 text-xs text-white">
                    {projekt.details.leistung + " kW"}
                  </span>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projekte;
