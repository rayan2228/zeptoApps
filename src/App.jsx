import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
