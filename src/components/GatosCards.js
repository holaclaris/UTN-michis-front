import React, {useEffect, useState} from 'react';
import './GatosCards.css'
import Card from './Card';

function GatosCards() {

    const [gatos, setGatos] = useState([]);
    const[mensajeEliminado, setMensajeEliminado] = useState(false);

    const traerGatos = () => {
        fetch("http://localhost:4000/")
            .then(response => response.json())
            .then(gatos => setGatos(gatos.data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        traerGatos()
    }, [mensajeEliminado])

    
    //FALTA FUNCION PARA EDITAR 
    //const handleEditar=(e)=>{
    //     e.preventDefault()

    // }


    const handleEliminar=(e)=>{
      e.preventDefault()

      fetch(`http://localhost:4000/${e.target.id}`, {
        method:'delete',
        })
        .then((resp) =>{return resp.json()})
        .then((data) => {
              data.status === 200 ? setMensajeEliminado(true) : setMensajeEliminado(false);
              setTimeout(() => {setMensajeEliminado(false) }, 3000)
        })
        .catch(err => console.log("No se logro enviar: " + err))
    }

    return (
        <div className="contenedorGatos">
            <Card gatos={gatos} mensajeEliminado={mensajeEliminado} handleEliminar={handleEliminar}/>
        </div>
    )
}
export default GatosCards;