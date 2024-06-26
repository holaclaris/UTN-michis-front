import { useState } from "react";  
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import 'animate.css';


function Header({ setFormAgregar, handlerFormBuscar, setFiltrados }){
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = ()=>{
    setIsOpen((open)=>!open);
  };

  const verGatos = ()=>{
    setFiltrados("")
    setFormAgregar(false)
  }

    return (
        <header>
        <div className={`contenedorTitulo ${isOpen ? "is-open": ""}`} id="contenedorTitulo">
          <h1 className="animate__animated animate__flipInY roboto-thin">MICHIS</h1>
          <p className="animate__animated animate__flipInY roboto-thin">TU MEJOR AMIGO</p>
        </div>
  
        <nav className={`navBar ${isOpen ? "is-open": ""}`} id="navBar" >
          <MdOutlineMenu 
            id="hamburguesa" 
            onClick={toggleMenu} 
            className={`${isOpen ? "is-open": ""}`}
          /> 
          <div 
            id="barraOcultar" 
            className={`${isOpen ? "is-open": ""}`}>
            <ul className="navList navLinks">
              <li>
                <IoMdClose 
                  id="cruz" 
                  onClick={toggleMenu} 
                  className={`${isOpen ? "is-open": ""}`}
                />
              </li> 
              <li className='roboto-medium' 
                  onClick={verGatos}
                  >GATOS
              </li>
              <li className='roboto-medium' 
                  onClick = {()=>{setFormAgregar(true)}}
                  >CREAR GATO
              </li>
            </ul>
              <div className="contenedorLupaCarrito">
                  <IoIosSearch id="lupa" />
                  <form onSubmit={handlerFormBuscar}>
                    <input 
                      type="text" 
                      id="busqueda" 
                      name="busqueda" 
                      placeholder="Ingresa tu búsqueda..."/>
                    <button type="submit" 
                            id="buscar"
                            > Buscar 
                    </button>
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