import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../layout/HomePage";
import Company from "../layout/Company";
import Faq from "../layout/Faq";
import { ProductsProvider } from "../context/ProductsProvider";
import BecomeASupplier from "../layout/BecomeASupplier";

export default function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/become-a-supplier" element={<BecomeASupplier />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export function BtnReadMore() {
  return <button className="more">Leia mais</button>;
}
