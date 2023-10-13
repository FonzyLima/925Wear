'use client'
import Card from "@/components/Shared/Card";
import Button from "@/components/Shared/Button";
import { useState, useEffect } from "react";
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

export default function Shop() {

  const [products, setProducts] = useState(null);
  const [page,setPage] = useState(0)
  const fetchProducts = async () => {
    try {
      const productsData = await getProduct();
      setProducts(productsData);
      
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle the error, e.g., set an error state
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(products)
  }, [products]); 
  const nextPage = () =>{
    if(page<4){
      setPage(page+2)
    }
  }
  const backPage = () =>{
    if(page>0){
      setPage(page-2)
    }
  }
  return (
    <div className="flex flex-col justify-between bg-white w-full px-[60px] pt-[100px] pb-[40px] rounded-br-[50px] rounded-bl-[50px]" > 

      <div className="w-full flex flex-row justify-end">
      <div className=" flex flex-col">
        <div className="text-[60px] font-bold">
          SHOP COLLECTION 02
        </div> 
        <Button classN="mt-[0px]" text="Order Now" variant="yellowgreen" link="https://form.jotform.com/232811090133444" target="_blank" />
      </div>
      </div>
      
      <div className="w-full mt-[46px] flex flex-col gap-[20px]">
        <div className="w-full flex flex-row justify-between gap-[20px]">
        {products == null ? null : products.items.slice(page*3,(page+1)*3).map((product,i)=>(
          <div key={product.fields.name} className="">
            {products.includes.Asset.map((a) => (
                <div key={a.sys.id}>
                  {product.fields.image.sys.id == a.sys.id ? (
                    <Card  title={product.fields.name} price={`PHP ${product.fields.price}`} image={"https:" + a.fields.file.url}/>
                    
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            
            </div>
        ))}
        </div>
        <div className="w-full flex flex-row justify-between gap-[20px]">
        {products == null ? null : products.items.slice((page+1)*3,(page+2)*3).map((product,i)=>(
          <div key={product.fields.name} className="">
           
           {products.includes.Asset.map((a) => (
                <div key={a.sys.id}>
                  {product.fields.image.sys.id == a.sys.id ? (
                    <Card  title={product.fields.name} price={`PHP ${product.fields.price}`} image={"https:" + a.fields.file.url}/>
                    
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
        ))}
        </div>
        
      </div>
      {/* <div className="px-[100px] mt-[46px] flex flex-col gap-[20px]">
      {products == null ? null : Array.from({length:2},(v,rowIndex)=>(
        <div key={rowIndex} className="flex flex-row gap-[20px] ">
          
          {products.items.slice(rowIndex*3,(rowIndex+1)*3).map((product,i)=>(
            <div key={i} className="w-1/3">
              
            <Card  title={product.fields.name} price={`P ${product.fields.price}`} image={sample}/>
            </div>
          ))}
        </div>
      ))} */}
      {/* {products.items.map((product,i) => (
        <div key={i} className="w-[450px]">
        <Card  title={product.fields.name} price={product.fields.price} image={sample}/>
        </div>
      ))} */}
      {/* </div> */}
      <div className="flex flex-row gap-[10px] justify-end mt-[46px]">
              <button
                onClick={backPage}
                className={`btn text-[40px] text-black bg-yellowgreen rounded-full w-[78px] h-[78px] border-black border-[1px] duration-300 hover:text-yellowgreen hover:border-yellowgreen hover:bg-black`}
              >
                &larr;
              </button>
              <button
                onClick={nextPage}
                className={`btn text-[40px] text-black bg-yellowgreen rounded-full w-[78px] h-[78px] border-black border-[1px] duration-300 hover:text-yellowgreen hover:border-yellowgreen hover:bg-black`}
              >
                &rarr;
              </button>
            </div>
      

    </div>
  )
}
