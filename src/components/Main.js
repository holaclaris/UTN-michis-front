
import GatosCards from "./GatosCards";

function Main({filtrados, setFiltrados}) {
  console.log(filtrados)

  return (
    <main id="inicio">
      <div className="presentacion">
        <p>Conoce a nuestros pequeños amigos</p>
        <p>¡Crea tus propias tarjetas!</p>
        <div id="gatitos"></div>
      </div>
       
      <GatosCards 
        filtrados = {filtrados} 
        setFiltrados = {setFiltrados}
        /> 

      <div className="presentacion">
        <p>¿Dudas o consultas?</p>
        <p>Contactanos por Whatsapp o redes sociales</p>
        <p>MICHIS</p>
      </div>

    </main>
  )
}

export default Main;