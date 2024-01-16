import { useEffect, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import CartList from "./CartList";
import useCart from "../hooks/useCart";

export default function Header() {
  const { openCartList, setOpenCartList, subtotal, cartList } = useCart();
  const limit = 500;
  const header = useRef(null);
  useEffect(function () {
    function handleScrollUp() {
      if (window.scrollY > limit) {
        header.current.style.position = "fixed";
        header.current.style.top = 0;
        header.current.style.left = 0;
        header.current.style.width = "100%";
        header.current.style.zIndex = 500;
        console.log(window.scrollY);
      } else {
        header.current.style.position = "static";
        header.current.style.top = "";
        header.current.style.left = "";
        header.current.style.width = "100%";
        header.current.style.zIndex = 0;
      }
    }

    document.addEventListener("scroll", handleScrollUp);

    return () => document.removeEventListener("scroll", handleScrollUp);
  });

  return (
    <header className="header" ref={header}>
      <nav className="navbar">
        <NavLink to="/" className="navbar__logo">
          <img src="./images/Logo.svg" alt="Logo" className="logo" />
          <img src="./images/brand.svg" alt="" className="brand" />
        </NavLink>
        <Nav />
        <div className="cart">
          <button
            className="cart-btn"
            onClick={() => setOpenCartList(!openCartList)}
          >
            {" "}
            <TiShoppingCart />{" "}
          </button>
          {openCartList && (
            <div className="list">
              <CartList />

              <footer className="cart__footer mt-md">
                <h3 className="heading-3">Subtotal</h3>
                <h3 className="heading-3">
                  {cartList.length === 0
                    ? "Nenhum item na lista"
                    : `${cartList.length} items na lista`}
                </h3>
                <p className="price">{subtotal}kz</p>
              </footer>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

function Nav() {
  return (
    <ul className="navbar__nav">
      <li className="navbar__nav--item">
        <Dropdown />
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/home" className="navbar__nav--link">
          Home
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/company" className="navbar__nav--link">
          empresa
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/" className="navbar__nav--link">
          clientes
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/" className="navbar__nav--link">
          fornecedores
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/faq" className="navbar__nav--link">
          faq
        </NavLink>
      </li>
    </ul>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="select" onClick={() => setIsOpen(!isOpen)}>
        <a href="/" className="navbar__nav--link selected">
          Categorias <span className="caret"></span>
        </a>
      </div>
      {isOpen && (
        <ul className="dropdown__menu">
          <li className="dropdown__menu--item">
            <a href="/" className="dropdown__menu--link">
              Ferramentas{" "}
            </a>
          </li>
          <li className="dropdown__menu--item">
            <a href="/" className="dropdown__menu--link">
              Equipamentos{" "}
            </a>
          </li>
          <li className="dropdown__menu--item">
            <a href="/" className="dropdown__menu--link">
              Máquinas{" "}
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
