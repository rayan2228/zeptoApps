import { lazy } from "react";

const Home = lazy(() => import("./Home"))
const Wishlist = lazy(() => import("./Wishlist"))
export { Home, Wishlist }