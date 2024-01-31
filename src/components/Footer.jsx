import { useState } from "react";
import { IconContext } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h2 className="heading-2 mb-md">Contactos</h2>
          <div className="brands mb-sm">
            <IconContext.Provider value={{ className: "brand" }}>
              <Link to="https://www.instagram.com/_imadet_/">
                {" "}
                <FaInstagram />
              </Link>

              <Link to="https://wa.me/message/6BM5CMFBI2WXL1">
                {" "}
                <FaWhatsapp />
              </Link>
            </IconContext.Provider>
          </div>

          <span className="email">Imadet007@gmail.com</span>
        </Modal>
      )}
      <footer className="footer">
        <Link to="/home" className="footer__logo">
          <img src="images/logo.svg" alt="Logo" className="logo" />
          <img src="images/brand-dark.svg" alt="brand" className="brand" />
        </Link>
        <span className="copyright">
          &copy; 2023-2030 Todos os direitos reservados
        </span>
        <a
          href=""
          className="contacts"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        >
          Contactos
        </a>
      </footer>
    </>
  );
}
