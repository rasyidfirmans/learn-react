import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";
import { getProducts } from "../services/products.service";
import { useLogin } from "../hooks/useLogin";
import { useLogout } from "../hooks/useLogout";

const ProductPage = () => {
  const username = useLogin();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // componentDidMount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return (acc += product.price * item.quantity);
      }, 0);

      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

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

  // Hook useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // eslint-disable-next-line no-unused-vars
  const handleAddToCartRef = (id) => {
    if (cartRef.current.find((item) => item.id === id)) {
      cartRef.current = cartRef.current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cartRef.current = [...cartRef.current, { id, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center">
        <h1 className="font-bold">{username}</h1>
        <Button classname="ml-5 bg-black" onClick={useLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
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
                const product =
                  products.length > 0 &&
                  products.find((product) => product.id === item.id);

                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "USD",
                      })
                        .format(product.price * item.quantity)
                        .replace("US$", "US$ ")}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan="2">
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })
                      .format(totalPrice)
                      .replace("US$", "US$ ")}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
