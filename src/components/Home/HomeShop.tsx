import CardSlider from "./CardSlider";

const cards = [
  { title: "Card 1", description: "Description 1" },
  { title: "Card 2", description: "Description 2" },
  { title: "Card 3", description: "Description 3" },
  { title: "Card 4", description: "Description 4" },
  // Add more cards as needed
];

const HomeShop = () => {
  return (
    <>
      <div className="w-full bg-white flex items-center justify-center p-[50px]">
        <CardSlider cards={cards} />
      </div>
    </>
  );
};
export default HomeShop;
