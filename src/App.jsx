import ErrorPage from "./pages/404";
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
