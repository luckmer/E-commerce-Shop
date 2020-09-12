//pages
import LandingPage from "./pages/LandingPage.jsx";
import Products from "./pages/Products.jsx";
import Details from "./pages/Details.jsx";
import Catalog from "./pages/Catalog.jsx";
import Cart from "./pages/Cart.jsx";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/products", Component: Products, name: "products" },
    { path: "/catalog", Component: Catalog, name: "catalog" },
    { path: "/cart", Component: Cart, name: "cart" },
    { path: "/:id", Component: Details, name: "details" },
];
