import { FaWhatsapp } from "react-icons/fa";

function Banner() {
    return (
        <div className="banner">
            <p>Tarjetas con gatitos... Agregá, editá o eliminá</p>
            <div className="contenedorWhatsapp">
                <a href="http://wa.me/5491144446961" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp id="whatsapp"/>
                </a>
            </div>
        </div>
    )
}
export default Banner;