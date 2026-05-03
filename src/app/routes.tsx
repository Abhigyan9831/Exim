import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Certifications } from "./pages/Certifications";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:category/:id", Component: ProductDetail },
      { path: "certifications", Component: Certifications },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
