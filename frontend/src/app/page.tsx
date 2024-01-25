import Category from "@/components/Category";
import Countdown from "@/components/Countdown";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import { useFetch } from "@/lib/hooks/useFetch";

export default async function Home() {
  const heroImg = await useFetch("/heroes?populate=*");
  return (
    <main className=" min-h-screen max-w-[100vw]">
     <Hero heroImg={heroImg?.data}/>
      <Category />
      <FeaturedProduct type="featured" title='Featured Products'/>
      <Countdown/>
      <FeaturedProduct type="trending" title='Trending Products'/>
    </main>
  );
}
