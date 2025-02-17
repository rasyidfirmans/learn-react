import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useLogout } from "../../hooks/useLogout";
import Button from "../elements/button/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();
  const cart = useSelector((state) => state.cart.data);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);

    setTotalCart(total);
  }, [cart]);

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center relative">
      <h1 className="font-bold">{username}</h1>
      <Button classname="ml-5 bg-black" onClick={useLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        {totalCart}
      </div>
      <button
        className="fixed bottom-4 right-4 bg-blue-600 p-4 text-white rounded-full shadow-lg"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default NavBar;
