import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../layout/HomePage";
import Company from "../layout/Company";
import Faq from "../layout/Faq";
import { ProductsProvider } from "../context/ProductsProvider";
import BecomeASupplier from "../layout/BecomeASupplier";
import LoginPage from "../layout/LoginPage";
import SigninPage from "../layout/SigninPage";
import Equipments from "./Equipments";
import Machines from "./Machines";

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-in" element={<SigninPage />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/equipments" element={<Equipments />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export function BtnReadMore() {
  return <button className="more">Leia mais</button>;
}
