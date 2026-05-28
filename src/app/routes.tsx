import { createBrowserRouter, useLocation } from "react-router";
import { useEffect } from "react";
import { Layout } from "./components/Layout";

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
      {
        index: true,
        lazy: async () => {
          const { Home } = await import("./pages/Home");
          return { Component: Home };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const { About } = await import("./pages/About");
          return { Component: About };
        },
      },
      {
        path: "products",
        lazy: async () => {
          const { Products } = await import("./pages/Products");
          return { Component: Products };
        },
      },
      {
        path: "products/:category/:id",
        lazy: async () => {
          const { ProductDetail } = await import("./pages/ProductDetail");
          return { Component: ProductDetail };
        },
      },
      {
        path: "certifications",
        lazy: async () => {
          const { Certifications } = await import("./pages/Certifications");
          return { Component: Certifications };
        },
      },
      {
        path: "contact",
        lazy: async () => {
          const { Contact } = await import("./pages/Contact");
          return { Component: Contact };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { NotFound } = await import("./pages/NotFound");
          return { Component: NotFound };
        },
      },
    ],
  },
]);
