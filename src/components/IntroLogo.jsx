import { NavLink } from "react-router-dom";

function IntroLogo() {
  return (
    <div className="header">
      <img src="images/brand.svg" className="logo-imadet" alt="logo light" />
      <NavLink to="/become-a-supplier" className="btn">
        Seja fornecedor
      </NavLink>
    </div>
  );
}

export default IntroLogo;
