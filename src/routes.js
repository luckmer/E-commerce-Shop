//pages
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Like from "./pages/Like";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/products", Component: Products, name: "products" },
    { path: "/catalog", Component: Catalog, name: "catalog" },
    { path: "/cart", Component: Cart, name: "cart" },
    { path: " /Liked/:id", Component: Like, name: "like" },
    { path: "/:id", Component: Details, name: "details" },
];
