import SectionContainer from "components/SectionContainer";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/future/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import auerswald from "assets/pic/partner/partner_auerswald_logo.png";
import hager from "assets/pic/partner/partner_hager_logo.png";
import jung from "assets/pic/partner/partner_jung_logo.png";
import siedle from "assets/pic/partner/partner_siedle_logo.png";
import solarworld from "assets/pic/partner/solarworld-zertifizierter-fachpartner.jpg";
import miele from "assets/pic/partner/partner_miele_logo.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Partner = ({}) => {
  return (
    <SectionContainer className="w-full py-16 ">
      <h3 className="pb-16 text-2xl font-bold">Unsere Partner</h3>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        focusOnSelect={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style pb-12"
        itemClass="carousel-item-padding-80-px h-32 flex items-center justify-center"
      >
        <Image
          src={auerswald}
          loading="lazy"
          alt="Arise Health logo"
          className="clients-image aspect-auto h-24"
          aria-hidden="true"
        />
        <Image
          src={hager}
          loading="lazy"
          alt="Hager logo"
          className="clients-image aspect-auto h-24"
          aria-hidden="true"
        />
        <Image
          src={siedle}
          loading="lazy"
          alt="The Paak logo"
          className="clients-image aspect-auto h-24"
          aria-hidden="true"
        />
        <Image
          src={miele}
          loading="lazy"
          alt="Miele logo"
          className="clients-image aspect-auto h-24"
          aria-hidden="true"
        />
        <Image
          src={solarworld}
          loading="lazy"
          alt="Solarworld logo"
          className="clients-image aspect-auto h-32"
          aria-hidden="true"
        />
        <Image
          src={jung}
          loading="lazy"
          alt="Jung logo"
          className="clients-image aspect-auto h-24"
        />
      </Carousel>
    </SectionContainer>
  );
};

export default Partner;
