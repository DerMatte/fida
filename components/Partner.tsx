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

      {/* <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        className=""
      >
        <div className="flex flex-row items-center justify-center space-x-4 pb-16">
          <Image className="aspect-video" src={auerswald} alt="Auerswald" />
          <Image className="aspect-video" src={hager} alt="Hager" />
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 pb-16">
          <Image className="aspect-video" src={jung} alt="Jung" />
          <Image className="aspect-video" src={siedle} alt="Siedle" />
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 pb-16">
          <Image className="aspect-video" src={solarworld} alt="Solarworld" />
        </div>
      </Carousel> */}
      {/* <div
        data-delay={4000}
        data-animation="slide"
        className="slider w-slider"
        data-autoplay="true"
        data-easing="ease"
        data-hide-arrows="false"
        data-disable-swipe="false"
        data-autoplay-limit={0}
        data-nav-spacing={4}
        data-duration={500}
        data-infinite="true"
        role="region"
        aria-label="carousel"
      >
        <div className="mask w-slider-mask" id="w-slider-mask-0">
          <div
            className="slide w-slide -translate-x-96 transition-all duration-500 ease-in-out"
            aria-label="1 of 2"
            role="group"
            // style={{
            //   transform: "translateX(-940px)",
            //   opacity: 1,
            //   transition: "transform 500ms ease 0s",
            // }}
            aria-hidden="true"
          >
            <div className="partner-wrapper" aria-hidden="true">
              <img
                src="https://uploads-ssl.webflow.com/632cca3d60d8ce68130e445c/6346c7d6ae2b9da31961ee89_partner_solarworld_logo.png"
                loading="lazy"
                alt="Arise Health logo"
                className="clients-image aspect-auto h-24"
                aria-hidden="true"
              />
              <img
                src="https://uploads-ssl.webflow.com/632cca3d60d8ce68130e445c/63452ee93e1b785c8cbcf964_partner_hager_logo.png"
                loading="lazy"
                alt="OE logo"
                className="clients-image aspect-auto h-24"
                aria-hidden="true"
              />
              <img
                src="https://uploads-ssl.webflow.com/632cca3d60d8ce68130e445c/63452ee863d2693ce1822e88_partner_siedle_logo.png"
                loading="lazy"
                alt="The Paak logo"
                className="clients-image aspect-auto h-24"
                aria-hidden="true"
              />
              <img
                src="https://uploads-ssl.webflow.com/632cca3d60d8ce68130e445c/6346c7d66ceab1d05312e69f_partner_miele_logo.png"
                loading="lazy"
                alt="The Paak logo"
                className="clients-image aspect-auto h-24"
                aria-hidden="true"
              />
            </div>
          </div>
          <div
            className="w-slide"
            aria-label="2 of 2"
            role="group"
            style={{
              transform: "translateX(-940px)",
              opacity: 1,
              transition: "transform 500ms ease 0s",
            }}
          >
            <div className="partner-wrapper last-partner-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/632cca3d60d8ce68130e445c/63452ee92dd17c35508655fa_partner_auerswald_logo.png"
                loading="lazy"
                alt="Auerswald logo"
                className="clients-image aspect-auto h-24"
              />
              <img
                src="https://uploads-ssl.webflow.com/632cca3d60d8ce68130e445c/63452ee830a2ef544188570a_partner_jung_logo.png"
                loading="lazy"
                alt="2020INC logo"
                className="clients-image aspect-auto h-24"
              />
            </div>
          </div>
          <div
            aria-live="off"
            aria-atomic="true"
            className="w-slider-aria-label"
            data-wf-ignore=""
          >
            Slide 2 of 2.
          </div>
        </div>
      </div> */}
    </SectionContainer>
  );
};

export default Partner;
