import Category from "@/components/Category";
import Countdown from "@/components/Countdown";

import Hero from "@/components/Hero";
import SubHeading from "@/components/SubHeading";
import Testimonials from "@/components/Testimonials";
import { useFetch } from "@/lib/hooks/useFetch";
import dynamic from "next/dynamic";




export default async function Home() {
  const FeaturedProduct = dynamic(() => import("@/components/FeaturedProduct"), {
    loading: () => <p>Loading...</p>,
  });
  const heroImg = await useFetch("/heroes?populate=*");
  return (
    <main className=" min-h-screen w-full ">
      <Hero heroImg={heroImg?.data} />
      <Category />

      <div>
        <SubHeading
          title="Trending This Week"
          paragraph="Here’s some of our most popular products people are in love with."
        />
        <FeaturedProduct type="trending" />
      </div>
      <Countdown />
      <Testimonials />
      <div>
        <SubHeading
          title="Popular On Dressify"
          paragraph="Find the top most popular items in Dressify best sellers."
        />
        <FeaturedProduct type="popular" />
      </div>
    </main>
  );
}
