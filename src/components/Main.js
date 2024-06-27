
import GatosCards from "./GatosCards";

function Main({ filtrados, setFiltrados }) {

  return (
    <main id="inicio">
      <div className="presentacion">
        <p>Crea, busca, edita o elimina tus propias tarjetas</p>
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