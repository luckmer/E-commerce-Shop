//pages
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/products", Component: Products, name: "products" },
    { path: "/catalog", Component: Catalog, name: "catalog" },
    { path: "/cart", Component: Cart, name: "cart" },
    { path: "/:id", Component: Details, name: "details" },
];
