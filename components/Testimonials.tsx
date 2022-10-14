import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useRef } from "react";

import { Carousel } from "react-responsive-carousel";
import SectionContainer from "./SectionContainer";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

// const Testimonials = ({}) => {
//   return (
//     <SectionContainer className="py-16 ">
//       <h3 className="pb-16 text-2xl font-bold">Was unsere Kunden sagen</h3>

//       <Carousel
//         showThumbs={false}
//         showStatus={false}
//         autoPlay={true}
//         interval={7000}
//         className="grid grid-cols-2 gap-4 overflow-x-auto"
//       >
//         {TestimonialsData.map((t) => (
//           <div
//             key={t.id}
//             className="flex flex-col items-center justify-around rounded-md border-2 border-black pt-12 "
//           >
//             <p className="max-w-xs pt-8 sm:min-w-0">{t.text}</p>
//             <h3 className="pt-4 ">{t.author}</h3>
//             <p className="pb-16 text-gray-500 ">{t.detail}</p>
//           </div>
//         ))}
//       </Carousel>
//     </SectionContainer>
//   );
// };
const Testimonials = ({}) => {
  // let ref = useRef();
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "center",
  //   });
  //   const scrollinTo = () => {
  //     ref.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest",
  //       inline: "center",
  //     });
  //   };
  return (
    <SectionContainer className="relative py-16 ">
      <h3 className="pb-16 text-2xl font-bold">Was unsere Kunden sagen</h3>

      <div className="relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto overscroll-contain pb-14">
        {TestimonialsData.map((t) => (
          <div
            key={t.id}
            // ref={ref}
            className="flex shrink-0 snap-center flex-col items-center justify-between rounded-md border-2 border-black pt-12 "
          >
            <p className="max-w-xs px-8 pt-8 sm:min-w-0">{t.text}</p>
            <div className="">
              <h3 className="pt-4 ">{t.author}</h3>
              <p className="pb-16 text-gray-500 ">{t.detail}</p>
            </div>
          </div>
        ))}
        {/* <button onClick={() => scroll(-20)}>LEFT</button>
          <button onClick={() => scroll(20)}>RIGHT</button>
          <button onClick={() => scrollinTo()}>Scroll</button> */}
      </div>
    </SectionContainer>
  );
};

// const Testimonials = ({}) => {
//   return (
//     <SectionContainer className=" py-32 ">
//       <Swiper
//         // install Swiper modules
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         // spaceBetween={50}
//         slidesPerView={2}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         {TestimonialsData.map((t) => (
//           <div
//             key={t.id}
//             className="flex flex-col items-center justify-around rounded-md border-2 border-black pt-12 "
//           >
//             <p className="max-w-xs pt-8 sm:min-w-0">{t.text}</p>
//             <h3 className="pt-4 ">{t.author}</h3>
//             <p className="pb-16 text-gray-500 ">{t.detail}</p>
//           </div>
//         ))}
//       </Swiper>
//     </SectionContainer>
//   );
// };

export default Testimonials;
