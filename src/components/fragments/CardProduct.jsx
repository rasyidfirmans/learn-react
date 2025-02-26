/* eslint-disable react/prop-types */
import { Link } from "react-router";
import Button from "../elements/button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="w-80 max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;

  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { name, children } = props;

  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-n text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "USD",
        })
          .format(price)
          .replace("US$", "US$ ")}
      </span>
      <Button
        classname="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, quantity: 1 }))}
      >
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
