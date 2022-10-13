import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SectionContainer from "./SectionContainer";

const TestimonialsData = [
  {
    id: 1,
    text: "Wir sind sehr zufrieden mit der Arbeit von Fi-Da. Die Mitarbeiter sind sehr freundlich und kompetent. Wir können die Firma nur weiterempfehlen.",
    author: "Familie Schmid",
    detail: "aus Filderstadt",
  },
  {
    id: 2,
    text: "Top Service, Sehr Kompetente Handwerk und verstehen ihren Job sehr gut 5*",
    author: "Petro Shqiptar",
    detail: "aus Leinfelden",
  },
  {
    id: 3,
    text: "Sehr gute Arbeit, sehr freundlich und zuverlässig. Kann ich nur weiterempfehlen.",
    author: "Max Mustermann",
    detail: "aus Stuttgart",
  },
  {
    id: 4,
    text: "Sehr freundliche Firma! Sehr nette Mitarbeiter! Faire Preise! Absolut zu empfehlen!",
    author: "N. Soysa",
    detail: "aus Stuttgart",
  },
];

const Testimonials = ({}) => {
  return (
    <SectionContainer className="py-16 ">
      <h3 className="pb-16 text-2xl font-bold">Was unsere Kunden sagen</h3>

      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={7000}
      >
        {TestimonialsData.map((t) => (
          <div
            key={t.id}
            className="flex flex-col items-center justify-around rounded-md border-2 border-black pt-12 "
          >
            <p className="max-w-xs pt-8 sm:min-w-0">{t.text}</p>
            <h3 className="pt-4 ">{t.author}</h3>
            <p className="pb-16 text-gray-500 ">{t.detail}</p>
          </div>
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default Testimonials;
