import Header from "@/components/Home/Header";
import HomeDescription from "@/components/Home/HomeDescription";
import HomeShop from "@/components/Home/HomeShop";
import HomeStory from "@/components/Home/HomeStory";
import Footer from "@/components/Shared/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HomeDescription
        title="02: STONE FISH"
        description="The newest collection honors Lobo, Batangas, the hometown of our grandparents and a second home to our family. Known for being a fishing town with scenic stone beaches and mountain ranges, 02: STONE FISH features outdoor and fishing-inspired wear to be worn in and out of the city."
      />
      <HomeShop />
      <HomeStory />
    </div>
  );
}
