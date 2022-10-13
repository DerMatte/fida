import Topbar from "components/Topbar";
import Link from "next/link";
import Layout from "../components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

const IndexPage = () => (
  <Layout>
    <h1 className="text-2xl font-bold">Fi-Da</h1>
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
