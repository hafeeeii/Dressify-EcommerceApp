import Category from "@/components/Category";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import { useFetch } from "@/lib/hooks/useFetch";
import Image from "next/image";



export default async function Home() {
  const heroImg = await useFetch("/heroes?populate=*");

  return (
    <main className="flex min-h-screen max-w-[100vw] flex-col ">
     <Hero heroImg={heroImg?.data}/>
      <Category />
      <FeaturedProduct type="featured" title='Featured Products'/>
      <div className="flex flex-col sm:flex-row justify-center pt-20 gap-8 flex-wrap p-2">
        <div>
          <div className="relative sm:w-[28rem] h-[35rem] overflow-hidden ">
            <Image
              src="/bn1_f1.webp"
              alt="img"
              fill
              className="hover:scale-110  duration-500"
            />
          </div>
          <h2 className="text-3xl my-3">Set Nightwear</h2>
          <h3>Explore the Lookbook</h3>
        </div>

        <div>
          <div className="relative sm:w-[28rem] h-[35rem] overflow-hidden ">
            <Image
              src="/bn1_f1.webp"
              alt="img"
              fill
              className="hover:scale-110  duration-500"
            />
          </div>
          <h2 className="text-3xl my-3">Set Nightwear</h2>
          <h3>Explore the Lookbook</h3>
        </div>

        <div>
          <div className="relative sm:w-[28rem] h-[35rem] overflow-hidden ">
            <Image
              src="/bn1_f1.webp"
              alt="img"
              fill
              className="hover:scale-110  duration-500"
            />
          </div>
          <h2 className="text-3xl my-3">Set Nightwear</h2>
          <h3>Explore the Lookbook</h3>
        </div>
      </div>
      <FeaturedProduct type="trending" title='Trending Products'/>
    </main>
  );
}
