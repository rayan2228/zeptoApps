import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import { Home, Wishlist } from "./pages";
import { Suspense } from "react";
import Loading from "./components/ui/Loading";

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/wishlists" element={<Wishlist />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
