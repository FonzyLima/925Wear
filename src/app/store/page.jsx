
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
  console.log(products.items)
  return (
    <div>

      <ul className="z-50">
      {products.items.map((product) => (
        <li key={product.fields.name}>{product.fields.name}</li>
      ))}
      {products.items.map((product) => (
        <li key={product.fields.name}>{product.fields.name}</li>
      ))}
      {products.items.map((product) => (
        <li key={product.fields.name}>{product.fields.name}</li>
      ))}
    </ul>
    </div>
  )
}
