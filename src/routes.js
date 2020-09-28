//pages
import LandingPage from "./pages/LandingPage.jsx";
import Products from "./pages/Products.jsx";
import Details from "./pages/Details.jsx";
import Catalog from "./pages/Catalog.jsx";
import Cart from "./pages/Cart.jsx";
import IncorrectPage from "./pages/404";
import Shipping from "./pages/payment/Shipping.jsx";
import Payment from "./pages/payment/Payment.jsx";
import CheckPayment from "./pages/payment/CheckPayment.jsx";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/products", Component: Products, name: "products" },
    { path: "/catalog", Component: Catalog, name: "catalog" },
    { path: "/cart", Component: Cart, name: "cart" },
    { path: "/checkout", Component: Shipping, name: "checkout" },
    { path: "/payment", Component: Payment, name: "payment" },
    { path: "/check", Component: CheckPayment, name: "check" },
    { path: "/:id", Component: Details, name: "details" },
    { path: "*", Component: IncorrectPage, name: "404" },
];
