import { Link } from "react-router-dom";
import { useState } from "react";  
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import 'animate.css';


function Header({handlerFormBuscar, setFiltrados}){

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = ()=>{
    setIsOpen((open)=>!open);
  };

    return (
        <header>
        <div className={`contenedorTitulo ${isOpen ? "is-open": ""}`} id="contenedorTitulo">
          <h1 className="animate__animated animate__flipInY roboto-thin">MICHIS</h1>
          <p className="animate__animated animate__flipInY roboto-thin">TU MEJOR AMIGO</p>
        </div>
  
        <nav className={`navBar ${isOpen ? "is-open": ""}`} id="navBar" >
          <MdOutlineMenu id="hamburguesa" onClick={toggleMenu} className={`${isOpen ? "is-open": ""}`}/> 
          <div id="barraOcultar" className={`${isOpen ? "is-open": ""}`}>
            <ul className="navList navLinks">
              <li><IoMdClose id="cruz" onClick={toggleMenu} className={`${isOpen ? "is-open": ""}`}/></li> 
              <li>
                <Link to="/" className='links roboto-thin' onClick={()=>setFiltrados("")}>GATOS</Link>
              </li>
              <li>
                <Link to="/AgregarGatitos" className='links roboto-thin'>AÑADIR GATO</Link>
              </li>
            </ul>
              <div className="contenedorLupaCarrito">
                  <IoIosSearch id="lupa"/>
                  <form onSubmit={handlerFormBuscar}>
                    <input type="text" id="busqueda" name="busqueda" placeholder="Ingresa tu búsqueda..."/>
                    <button type="submit" id="buscar" > Buscar </button>
                  </form>
              </div>

          </div>
        </nav>
  
        <div className="contenedorPortada">
          <img 
            src="/3cats.png"
            alt="Tres gatos cachorros" 
            />
        </div>
      </header>
    )
}
export default Header;