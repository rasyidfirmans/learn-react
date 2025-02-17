import { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const TableCart = (props) => {
  const { products } = props;
  const { isDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-5 ${
        isDarkMode && "text-white"
      }`}
    >
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
  );
};

TableCart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TableCart;
