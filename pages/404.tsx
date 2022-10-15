import Link from "next/link";
import SectionContainer from "components/SectionContainer";
import Layout from "components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title="404 - Seite nicht gefunden">
      <SectionContainer className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold md:text-4xl">
          404 - Dieser Teil der Seite wurde noch nicht gebaut.
        </h1>
        <p className="pt-4">
          <Link href="/">
            <a className="underline hover:decoration-yellow">
              Zurück zur Startseite
            </a>
          </Link>
        </p>
      </SectionContainer>
    </Layout>
  );
};

export default NotFoundPage;
