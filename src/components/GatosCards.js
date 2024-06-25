import React, { useEffect, useState } from 'react';
import './GatosCards.css'
import Card from './Card';

function GatosCards() {

    const [gatos, setGatos] = useState([]);
    const [mensajeEliminado, setMensajeEliminado] = useState(false);
    const [mensajeEditado, setMensajeEditado] = useState(false)
    const [idGatoElegido, setIdGatoElegido] = useState(``);


    //Mostrar todos los gatos
    const traerGatos = () => {
        fetch("http://localhost:4000/")
            .then(response => response.json())
            .then(gatos => setGatos(gatos.data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        traerGatos()
    }, [mensajeEliminado, mensajeEditado])


    //Eliminar gato por id
    const handleEliminar = (e) => {
        e.preventDefault()
        
         fetch(`http://localhost:4000/${e.target.value}`, {
            method: 'delete',
        })
            .then((resp) => { return resp.json() })
            .then((data) => {
                data.status === 200 ? setMensajeEliminado(true) : setMensajeEliminado(false);
                setTimeout(() => { setMensajeEliminado(false) }, 2000)
            })
            .catch(err => console.log("No se logro enviar: " + err))
    }

     //Editar gato por id 
     const handleEditar = (e) => {
        e.preventDefault()
        setMensajeEditado(true)
        setIdGatoElegido(e.target.value)
    }

    return (
        <div className="contenedorGatos">
            <Card gatos={ gatos }
                mensajeEditado={ mensajeEditado }
                setMensajeEditado={ setMensajeEditado}
                handleEditar={ handleEditar }
                mensajeEliminado={ mensajeEliminado }
                handleEliminar={ handleEliminar }
                idGatoElegido = { idGatoElegido }
            />
        </div>
    )
}
export default GatosCards;