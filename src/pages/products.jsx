import { useState } from "react";
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

  const [cart, setCart] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id, quantity: 1 }];
      }
    });
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
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Sub Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );

                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(product.price * item.quantity)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
