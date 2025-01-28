import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";

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
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center">
        <h1>{email}</h1>
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
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
    </>
  );
};

export default ProductPage;
