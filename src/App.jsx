import DarkModeContextProvider from "./context/DarkMode";
import { TotalPriceProvider } from "./context/TotalPriceContext";
import ErrorPage from "./pages/404";
import DetailProductPage from "./pages/detailProduct";
import LoginPage from "./pages/login";
import ProductPage from "./pages/products";
import ProfilePage from "./pages/profile";
import SignupPage from "./pages/signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello, world!</div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/product/:id",
      element: <DetailProductPage />,
    },
  ]);

  return (
    <DarkModeContextProvider>
      <TotalPriceProvider>
        <RouterProvider router={router} />
      </TotalPriceProvider>
    </DarkModeContextProvider>
  );
}

export default App;
