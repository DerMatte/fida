import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "Fi-Da Elektroinstallationen",
  description = "Fischer & Daumüller - Elektroinstallationen in Filderstadt",
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Topbar />
    <Navbar />
    {children}
    {/* <Footer /> */}
  </>
);

export default Layout;
