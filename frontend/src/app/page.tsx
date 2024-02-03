import Category from "@/components/Category";
import Countdown from "@/components/Countdown";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import SubHeading from "@/components/SubHeading";
import { useFetch } from "@/lib/hooks/useFetch";

export default async function Home() {
  const heroImg = await useFetch("/heroes?populate=*");
  return (
    <main className=" min-h-screen max-w-[100vw]">
      <Hero heroImg={heroImg?.data} />
      <Category />

      <Countdown />
      <div></div>
      <div>
        <SubHeading
          title="Trending"
          paragraph="Here’s some of our most popular products people are in love with."
        />
        <FeaturedProduct type="trending" />
      </div>
      <div>
        <SubHeading
          title="Popular"
          paragraph="Find the top most popular items in Dressify best sellers."
        />
        <FeaturedProduct type="popular" />
      </div>
    </main>
  );
}
