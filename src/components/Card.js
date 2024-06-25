import "./Card.css";
import FormEditar from "./FormEditar";
import { Link } from "react-router-dom";
const Card = ({ gatos,
    mensajeEditado,
    setMensajeEditado,
    handleEditar,
    mensajeEliminado,
    handleEliminar,
    idGatoElegido }) => {

    return (
        <>
            {
                (!mensajeEliminado && !mensajeEditado)
                    ?
                    <>
                        {
                            gatos.map((gato) => (
                                <div key={gato.id} className="tarjetaGato">
                                    <div>
                                        <img src={gato.img} alt={gato.nombre} />
                                        <div className="textoBotonesGato">
                                            <div className="textoGato">
                                                <h3 className = "capitalizar">{gato.nombre}</h3>
                                                <p>Sexo: {gato.sexo}</p>
                                                <p>Raza: {gato.raza}</p>
                                                <p>Edad: {gato.edad}</p>
                                                <p className="descripcion">{gato.descripcion}</p>
                                            </div>
                                            <button className="botonEditar"
                                                value={gato.id}
                                                onClick={handleEditar}
                                            > Editar
                                            </button>
                                            <button className="botonEliminar"
                                                value={gato.id}
                                                onClick={handleEliminar}
                                            >Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                    :
                    (mensajeEliminado && !mensajeEditado)
                        ?
                        <div className="exitoEliminado">
                            <p>¡Eliminado!</p>
                            <p> Cargando tarjetas...</p>
                        </div>
                        :
                        <FormEditar 
                            gatos = { gatos} 
                            idGatoElegido = { idGatoElegido } 
                            setMensajeEditado= { setMensajeEditado }/>

            }
        </>
    )
}

export default Card;