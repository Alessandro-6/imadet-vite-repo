/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import CartList from "./CartList";
import useCart from "../hooks/useCart";

export default function Header() {
  const { openCartList, setOpenCartList, subtotal, cartList } = useCart();
  const [prevScroll, setPrevScroll] = useState(0);
  const header = useRef(null);
  useEffect(function () {
    function resetNavBar() {
      header.current.style.position = "static";
      header.current.style.top = "";
      header.current.style.left = "";
      header.current.style.width = "100%";
      header.current.style.zIndex = 0;
    }

    function toFixedNavBar() {
      header.current.style.position = "fixed";
      header.current.style.top = 0;
      header.current.style.left = 0;
      header.current.style.width = "100%";
      header.current.style.zIndex = 500;
      console.log(window.scrollY);
    }

    function handleScrollUp() {
      if (prevScroll - window.scrollY > 0) {
        if (window.scrollY === 0) resetNavBar();
        else toFixedNavBar();
      }
      if (prevScroll - window.scrollY <= 0) resetNavBar();
      setPrevScroll(window.scrollY);
    }

    document.addEventListener("scroll", handleScrollUp);

    return () => document.removeEventListener("scroll", handleScrollUp);
  });

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header" ref={header}>
      <nav className="navbar">
        <NavLink to="/" className="navbar__logo">
          <img src="./images/Logo.svg" alt="Logo" className="logo" />
          <img src="./images/brand.svg" alt="Brand" className="brand" />
        </NavLink>
        <Nav showMenu={showMenu} />

        <button
          className="hamburger"
          onClick={() => setShowMenu(!showMenu)}
        ></button>

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
                  {cartList?.length === 0
                    ? "Nenhum item na lista"
                    : `${cartList?.length} items na lista`}
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

function Nav({ showMenu }) {
  return (
    <ul className={`navbar__nav ${showMenu ? "toggle" : ""}`}>
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
        <NavLink to="/become-a-supplier" className="navbar__nav--link">
          seja fornecedor
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/faq" className="navbar__nav--link">
          faq
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/login" className="navbar__nav--link">
          Login
        </NavLink>
      </li>
      <li className="navbar__nav--item">
        <NavLink to="/sign-in" className="navbar__nav--link">
          Cadastre-se
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
        <a className="navbar__nav--link selected">
          Alugar <span className="caret"></span>
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
