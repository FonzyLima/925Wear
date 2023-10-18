import Header from "@/components/Home/Header";
import HomeDescription from "@/components/Home/HomeDescription";
import HomeShop from "@/components/Home/HomeShop";
import HomeStory from "@/components/Home/HomeStory";
import Card from "@/components/Shared/Card";
import Footer from "@/components/Shared/Footer";
import Image from "next/image";
import { Key } from "react";
const getProduct = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=product`,
    { cache: "no-cache" }
  );

  if (!res.ok) {
    throw new Error("Fetch Error");
  }

  return res.json();
};
export default async function Home() {
  const products = await getProduct();
  console.log(typeof products.items);
  return (
    <div className="overflow-hidden">
      <Header />
      <HomeDescription
        title="02: STONE FISH"
        description="The newest collection honors Lobo, Batangas, the hometown of our grandparents and a second home to our family. Known for being a fishing town with scenic stone beaches and mountain ranges, 02: STONE FISH features outdoor and fishing-inspired wear to be worn in and out of the city."
      />
      <HomeShop products={products} />
      <HomeStory />
    </div>
  );
}
