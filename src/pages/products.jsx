import CardProduct from "../components/fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "MSI Stealth 15",
    price: 13999000,
    desc: "Lorem ipsum dolor sit amet!",
    image: "/src/assets/img/laptop.jpg",
  },
  {
    id: 2,
    name: "MSI Cyborg 15",
    price: 12999000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo dignissimos voluptatibus quisquam, maiores quam tempore porro aut eum, assumenda quas eaque! Doloremque cupiditate eaque molestiae porro! Non, culpa enim!",
    image: "/src/assets/img/laptop.jpg",
  },
  {
    id: 3,
    name: "MSI Summit Evo 15",
    price: 17999000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    image: "/src/assets/img/laptop.jpg",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.desc}
          </CardProduct.Body>
          <CardProduct.Footer price={`Rp ${product.price}`} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
