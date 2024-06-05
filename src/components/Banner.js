import { FaWhatsapp } from "react-icons/fa";

function Banner() {
    return (
        <div className="banner">
            <p>API de gatitos... Para aprender con una sonrisa</p>
            <div className="contenedorWhatsapp">
                <a href="http://wa.me/5491144446961" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp id="whatsapp"/>
                </a>
            </div>
        </div>
    )
}
export default Banner;