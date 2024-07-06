import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="post"] {
    ...,
    author->,
    } | order(_createdAt, desc)
`;

const Page = async () => {
  const posts = await client.fetch(query);
  console.log(posts);
  console.log("posts");
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;
