
import GatosCards from "./GatosCards";

function Main() {

  return (
    <main id="inicio">
      <div className="presentacion">
        <p>Conoce a nuestros pequeños amigos</p>
        <p>Llena tu vida de ternura!</p>
        <div id="gatitos"></div>
      </div>
       
      <GatosCards /> 

      <div className="presentacion">
        <p>¿Dudas o consultas?</p>
        <p>Contactanos por Whatsapp o redes sociales</p>
        <p>MICHIS</p>
      </div>

    </main>
  )
}

export default Main;