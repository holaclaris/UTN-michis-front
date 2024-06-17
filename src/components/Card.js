import "./Card.css";
import { useState} from "react";
// import {useEffect } from "react";

const Card = ({ gatos }) => {
    // const[mensajeEditado, setMensajeEditado] =useState(false)
    const[mensajeEliminado, setMensajeEliminado] = useState(false)

    //FALTA LA FUNCION PARA EDITAR 
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
      <>  
        { mensajeEliminado === false 
        ? 
        <>
            {
                gatos.map((gato) => (
                    <div key={gato.id} className="tarjetaGato">
                        <div>
                            <img src={gato.img} alt={gato.nombre} />
                            <div className="textoBotonesGato">
                                <div className="textoGato">
                                    <h3>{gato.nombre}</h3>
                                    <p>Sexo: {gato.sexo}</p>
                                    <p>Raza: {gato.raza}</p>
                                    <p>Edad: {gato.edad}</p>
                                    <p>Acerca de: {gato.descripcion}</p>
                                </div>
                                <button className="botonEditar"
                                        //Ojo... no puedo poner el mismo id que Eliminar?
                                        // onClick={(e)=>handleEditar(e)}
                                        > Editar 
                                </button>
                                <button className="botonEliminar"
                                        id={gato.id}
                                        onClick={(e)=>handleEliminar(e)}>Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
           
        </>
         :
         <div className="exitoEliminado">
         <p>Eliminado!</p>
         </div>}
    </>
    )
}


export default Card;