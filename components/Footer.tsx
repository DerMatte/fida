import SectionContainer from "components/SectionContainer";
import Image from "next/future/image";
import Link from "next/link";
import { TwitterLogo, InstagramLogo, FacebookLogo } from "phosphor-react";

import Logo from "assets/pic/Logo2LangFett.png";

const Footer = () => {
  return (
    <footer className="bg-yellow">
      <SectionContainer className="py-8 ">
        <div className="flex flex-col justify-between md:flex-row ">
          <div className="flex flex-col py-8 ">
            <Image src={Logo} alt="Fi-da GmbH Logo" className="w-40 " />
            <div className="flex flex-row space-x-4 pt-4">
              <Link href="#">
                <a>
                  <svg
                    style={{ width: "24px", height: "24px" }}
                    className="fill-black hover:fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="#">
                <a>
                  {/* <InstagramLogo size={24} /> */}
                  <svg
                    style={{ width: "24px", height: "24px" }}
                    className="fill-black hover:fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    />
                  </svg>
                </a>
              </Link>
              <Link href="#">
                <a>
                  {/* <FacebookLogo size={24} /> */}
                  <svg
                    style={{ width: "24px", height: "24px" }}
                    className="fill-black hover:fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div
            id="right"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            <div className="flex flex-col space-y-2">
              <p className="pb-4 font-semibold">Über uns</p>
              <Link href="/team">
                <a className="hover:underline">Team</a>
              </Link>
              <Link href="/projekte">
                <a className="hover:underline">Projekte</a>
              </Link>
              <Link href="/kontakt">
                <a className="hover:underline">Kontakt</a>
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="pb-4 font-semibold">Leistungen</p>
              <Link href="/leistungen/elektroinstallationen">
                <a className="hover:underline">Elektroinstallationen</a>
              </Link>
              <Link href="/leistungen/photovolatik">
                <a className="hover:underline">Photovoltaik</a>
              </Link>
              <Link href="/leistungen/gebaeudetechnik">
                <a className="hover:underline">Gebäudetechnik</a>
              </Link>
              <Link href="/leistungen">
                <a className="pt-2 hover:underline">Alle Leistungen &#10140;</a>
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <p className=" pb-4 font-semibold">Rechtliches</p>
              <Link href="/impressum">
                <a className="hover:underline">Impressum</a>
              </Link>
              <Link href="/datenschutz">
                <a className="hover:underline">Datenschutz</a>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
      <hr />
      <div className="flex justify-center p-4 text-sm">
        &copy; {new Date().getFullYear() || "2022"} - Fi-Da GmbH
      </div>
    </footer>
  );
};

export default Footer;
