import Topbar from "components/Topbar";
import Link from "next/link";
import Image from "next/future/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import Layout from "components/Layout";
import SectionContainer from "components/SectionContainer";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import { LeistungenData, ProjektData } from "lib/data";

// import Partner from "components/Partner";
const DynamicPartner = dynamic(() => import("components/Partner"), {
  suspense: true,
});

// import Testimonials from "components/Testimonials";
const Testimonials = dynamic(() => import("components/Testimonials"), {
  suspense: true,
});

import Projekte from "components/Projekte";
const DynamicContact = dynamic(() => import("components/Contact"), {
  suspense: true,
});
// import Contact from "components/Contact";

import banner from "assets/pic/banner_fi-da-team.jpg";
import AnimateNumber from "components/AnimateNumber";

const IndexPage = () => (
  <Layout>
    <section className="max-w-screen flex flex-col md:container md:mx-auto md:flex-row md:items-center  md:px-8 md:pt-8">
      <Image
        className="object-cover md:h-[50vh] md:w-1/2 md:max-w-[50vw] md:flex-1 md:rounded-sm "
        src={banner}
        priority={true}
        alt="Hero Banner"
      />
      {/* <div className="absolute top-1/2 left-1/2 flex -translate-y-1/2 -translate-x-1/2 flex-col items-center justify-center rounded-sm bg-white/75 p-8 backdrop-blur-lg"> */}
      <SectionContainer className="md:flex-1">
        <div className=" pt-12">
          <h2 className=" text-md font-display uppercase text-gray-700">
            Elektroinstallationen - Photovoltaik & Speicher
          </h2>
          <h1 className="pt-1 pb-2 font-display text-3xl font-bold md:text-4xl">
            Fischer & Daumüller <br /> Elektro
            <span className="hidden md:inline">installationen</span>
          </h1>
          <p className="max-w-lg pb-10">
            Das Fi-Da Team ist für Sie rund um den Strom für Sie unterwegs!
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/#Leistungen">
            <a className=" rounded-md border-2 px-4 py-2 decoration-black hover:border-2 hover:border-yellow ">
              Mehr erfahren
            </a>
          </Link>
          <Link href="/#Kontakt">
            <a className="rounded-md bg-black px-4 py-2 text-white hover:border-2 hover:border-yellow">
              Kontakt
            </a>
          </Link>
        </div>
      </SectionContainer>
    </section>
    <SectionContainer className="py-24">
      <div id="Leistungen" className="flex flex-col ">
        <h3 className="pb-4 font-display text-2xl font-bold">
          Unsere Leistungen
        </h3>
        <p className="max-w-lg pb-16">
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
    {/* <Partner /> */}
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicPartner />
    </Suspense>

    <Projekte />
    <SectionContainer className="border-y border-black py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col items-center  gap-4">
          <h4 className="text-4xl font-semibold">
            <AnimateNumber from={0} to={25} />
          </h4>
          <span className="">Jahre Erfahrung</span>
        </div>
        <div className="flex flex-col items-center  gap-4">
          <h4 className="text-4xl font-semibold">
            <AnimateNumber from={0} to={400} />
            {" km"}
          </h4>
          <span className="">an Leitungen verlegt</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-4xl font-semibold">
            <AnimateNumber from={0} to={5000} />
            {" kW"}
          </h4>
          <span className="">Solarpanels verbaut</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-4xl font-semibold">
            <AnimateNumber from={0} to={89} />
            {"%"}
          </h4>
          <span className="">Kundenzufriedenheit</span>
        </div>
      </div>
    </SectionContainer>
    <Suspense fallback={<div>Loading...</div>}>
      <Testimonials />
    </Suspense>
    {/* <Testimonials /> */}
    {/* <Contact /> */}
    <Suspense fallback={<div>Lade Kontakt Formular...</div>}>
      <DynamicContact />
    </Suspense>
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
