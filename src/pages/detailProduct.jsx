import { useParams } from "react-router";
import { getDetailProduct } from "../services/products.service";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../context/DarkMode";

const DetailProductPage = () => {
  const { id } = useParams();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [detailProduct, setDetailProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (response) => {
      setDetailProduct(response);
    });
  }, [id]);

  console.log(detailProduct);

  return (
    Object.keys(detailProduct).length > 0 && (
      <div
        className={`w-100 min-h-screen flex justify-center items-center ${
          isDarkMode && "bg-slate-900"
        }`}
      >
        <div className="flex font-sans max-w-xl">
          <div className="flex-none w-48 relative">
            <img
              src={detailProduct.image}
              alt={detailProduct.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1
                className={`flex-auto text-lg font-semibold text-slate-900 ${
                  isDarkMode && "text-slate-200"
                }`}
              >
                {detailProduct.title}
              </h1>
              <div
                className={`text-lg font-semibold text-slate-500 ${
                  isDarkMode && "text-slate-300"
                }`}
              >
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "USD",
                })
                  .format(detailProduct.price)
                  .replace("US$", "US$ ")}
              </div>
              <div
                className={`w-full flex-none text-sm font-medium text-slate-700 mt-2 ${
                  isDarkMode && "text-slate-300"
                }`}
              >
                Review: {detailProduct.rating.rate}/5 (
                {detailProduct.rating.count})
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div
                className={`space-x-2 flex text-sm ${
                  isDarkMode && "text-slate-200"
                }`}
              >
                {detailProduct.description}
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className={`h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 ${
                    isDarkMode && "text-slate-200"
                  }`}
                  type="button"
                >
                  Add to bag
                </button>
              </div>
              <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p
              className={`text-sm text-slate-700 ${
                isDarkMode && "text-slate-300"
              }`}
            >
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>

        <button
          className="absolute right-2 bottom-2 bg-blue-600 p-4 text-white rounded-full"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    )
  );
};

export default DetailProductPage;
