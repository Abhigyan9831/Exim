import { createBrowserRouter, useLocation } from "react-router";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Certifications } from "./pages/Certifications";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { element: <ScrollToTopOnRouteChange /> },
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:category/:id", Component: ProductDetail },
      { path: "certifications", Component: Certifications },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
