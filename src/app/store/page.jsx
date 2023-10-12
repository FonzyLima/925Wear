import Card from "@/components/Shared/Card";
import sample from "@/assets/sample.png";
const getProduct = async () => {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=product`
  ,
  {cache:"no-cache"}
  );

  if(!res.ok){
    throw new Error("Fetch Error");
  }

  return res.json()
}
export default async function Shop() {
  const products = await getProduct();
  console.log(typeof products.items)
  // Number of items per row
  // const itemsPerRow = 3;

  // // Calculate the number of rows
  // const numRows = Math.ceil(products.items.length / itemsPerRow);

  
  return (
    <div className="bg-white w-full px-[40px] pt-[100px] pb-[40px] rounded-br-[50px] rounded-bl-[50px]" > 
      <div className="w-full flex justify-end text-[60px] font-primary pr-[200px]">
        SHOP OUR NEW <br/>COLLECTION OUT NOW.
      </div>
      <div className="px-[100px] mt-[46px] flex flex-col gap-[20px]">
      {Array.from({length:3},(v,rowIndex)=>(
        <div key={rowIndex} className="flex flex-row gap-[20px] ">
          {products.items.slice(rowIndex*3,(rowIndex+1)*3).map((product,i)=>(
            <div key={i} className="w-1/3">
            <Card  title={product.fields.name} price={`P ${product.fields.price}`} image={sample}/>
            </div>
          ))}
        </div>
      ))}
      {/* {products.items.map((product,i) => (
        <div key={i} className="w-[450px]">
        <Card  title={product.fields.name} price={product.fields.price} image={sample}/>
        </div>
      ))} */}
      </div>
      
      

    </div>
  )
}
