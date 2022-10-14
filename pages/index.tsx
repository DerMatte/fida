import Topbar from "components/Topbar";
import Link from "next/link";
import Image from "next/future/image";

import Layout from "components/Layout";
import SectionContainer from "components/SectionContainer";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import { LeistungenData, ProjektData } from "lib/data";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Testimonials from "components/Testimonials";
import Contact from "components/Contact";
import Partner from "components/Partner";

const IndexPage = () => (
  <Layout>
    <section className="">
      <img
        className="h-64 w-screen object-cover md:h-96"
        src="https://www.fi-da.de/wp-content/uploads/banner_fi-da-team_21.jpg"
        alt="Hero"
      />
      {/* <div className="absolute top-1/2 left-1/2 flex -translate-y-1/2 -translate-x-1/2 flex-col items-center justify-center rounded-sm bg-white/75 p-8 backdrop-blur-lg"> */}
      <SectionContainer className="">
        <div className=" pt-12">
          <h2 className=" text-md uppercase text-gray-700">
            Elektroinstallationen - Photovoltaik & Speicher
          </h2>
          <h1 className="pt-1 pb-2 text-3xl font-bold">
            Fischer & Daumüller Elektroinstallationen
          </h1>
          <p className="max-w-lg pb-10">
            Das Fi-Da Team ist für Sie rund um den Strom für Sie unterwegs!
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#">
            <a className=" rounded-md border-2 px-4 py-2 decoration-black hover:border-2 hover:border-yellow hover:bg-black/10 ">
              Mehr erfahren
            </a>
          </Link>
          <Link href="/kontakt">
            <a className="rounded-md bg-black px-4 py-2 text-white hover:border-2 hover:border-yellow">
              Kontakt
            </a>
          </Link>
        </div>
      </SectionContainer>
    </section>
    <SectionContainer className="py-24">
      <div className="flex flex-col ">
        <h3 className="pb-4 text-2xl font-semibold">Unsere Leistungen</h3>
        <p className="pb-8">
          Die Firma Fi-Da GmbH, Fischer und Daumüller, wurde 1998 von den
          Elektromeistern Hans-Ulrich Fischer und Andreas Daumüller gegründet.
          Unser motiviertes Team von 14 Mitarbeitern ist für den Kunden
          unterwegs, um Energie nach dessen Vorstellungen effizient nutzbar zu
          machen.
        </p>
        <div className="grid grid-cols-1 gap-4 gap-y-8 md:grid-cols-2 ">
          {LeistungenData.map((leistung) => (
            <Link key={leistung.slug} href={`/leistungen/${leistung.slug}`}>
              <a className="flex flex-row gap-4  ">
                <Image
                  src={leistung.image}
                  alt={leistung.title}
                  className="w-20 rounded-sm object-cover"
                />
                <div className="flex flex-1 flex-col justify-start">
                  <h4 className="pb-2 text-xl font-semibold">
                    {leistung.title}
                  </h4>
                  <p className="max-w-md">{leistung.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </SectionContainer>
    <Partner />
    {/* Vergangene Projekte */}
    <SectionContainer className="py-24">
      <h3 className="text-2xl font-bold">Vergangene Projekte</h3>
      <p className="pt-4 ">
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

      <div className="grid grid-cols-1 gap-4 pt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ProjektData.map((projekt) => (
          <Link key={projekt.slug} href={`/projekte/${projekt.slug}`}>
            <a className="flex flex-col gap-4  ">
              <Image
                src={projekt.image}
                height={200}
                width={300}
                alt={projekt.title}
                className=" aspect-square w-full rounded-md object-cover"
              />
              <div className="flex flex-1 flex-col justify-start">
                <h4 className="pb-2 text-xl font-semibold">{projekt.title}</h4>
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
                    {projekt.details.leistung}
                  </span>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </SectionContainer>
    <SectionContainer className="border-y border-black py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="flex flex-col items-center  gap-4">
          <h4 className="text-5xl font-medium">25</h4>
          <span className="">Jahre Erfahrung</span>
        </div>
        <div className="flex flex-col items-center  gap-4">
          <h4 className="text-5xl font-medium">400 km</h4>
          <span className="">an Leitungen verlegt</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-5xl font-medium">5000 kW</h4>
          <span className="">Solarpanels verbaut</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-5xl font-medium">87%</h4>
          <span className="">Kundenzufriedenheit</span>
        </div>
      </div>
    </SectionContainer>
    <Testimonials />
    <Contact />
  </Layout>
);

// I always forget how to use this function

// export const getStaticProps: GetStaticProps = async (context) => {

//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default IndexPage;
