import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <footer className="contenedorFooter">
      <div className="contenedorIconosWhatsapp">
        <div className="contenedorIconos">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaSquareInstagram className="icono" /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter className="icono" /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="icono" /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF className="icono" /></a>
        </div>
        <div className="contenedorWhatsapp">
          <a href="http://wa.me/5491144446961" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp id="whatsappFooter" />
            <p>+5491144446961</p>
          </a>
        </div>
      </div>
      <small translate="no"><sup>©</sup>holaclaris</small>
    </footer>
  )
}
export default Footer;