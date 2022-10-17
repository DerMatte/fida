import Link from "next/link";
import Image from "next/future/image";
import cn from "classnames";

import { withRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// import { LogoRect, LogoLong } from "components/Logo";
// import { Logo2BreitKurz, Logo } from "components/Logo";
import Logo from "assets/pic/Logo40.png";
// import LogoRect from "assets/pic/LogoRect.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Leistungen", href: "/leistungen", current: false },
  { name: "Projekte", href: "/projekte", current: false },
  { name: "Über uns", href: "/ueber", current: false },
];

const Navbar = ({ router }) => {
  return (
    <Disclosure as="nav" className=" ">
      {({ open }) => (
        <>
          <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0  right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* big nav */}
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-start pl-6 sm:pl-2">
                  <Link href="/">
                    <a>
                      <Image
                        className=""
                        width={130}
                        height={42}
                        src={Logo}
                        alt="Logo Fi-Da"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          item.href == router.asPath
                            ? "border-b-2 border-yellow "
                            : "",
                          "px-3 py-2 font-semibold hover:border-b-2 hover:border-black "
                        )}
                        aria-current={
                          item.href == router.asPath ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Call To Action Button */}
              {/* <Link href="/contact">
                <a className="inset-y-0 rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:border-2 hover:bg-black/75 ">
                  Kontakt
                </a>
              </Link> */}
            </div>
          </div>

          {/* </ end big nav> */}
          {/* Dropdown mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cn(
                    item.href == router.asPath
                      ? "bg-black text-white"
                      : "text-black hover:bg-yellow hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.href == router.asPath ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default withRouter(Navbar);
