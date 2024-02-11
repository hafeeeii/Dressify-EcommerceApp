import Category from "@/components/Category";
import Countdown from "@/components/Countdown";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import SubHeading from "@/components/SubHeading";
import Testimonials from "@/components/Testimonials";
import { useFetch } from "@/lib/hooks/useFetch";

export default async function Home() {
  const heroImg = await useFetch("/heroes?populate=*");
  return (
    <main className=" min-h-screen max-w-[100vw]">
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
