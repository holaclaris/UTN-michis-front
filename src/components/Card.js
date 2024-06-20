import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ gatos, mensajeEliminado, handleEliminar }) => {

    return (
        <>
            {mensajeEliminado === false
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
                                        // onClick={handleEditar}
                                        > Editar
                                        </button>
                                        <button className="botonEliminar"
                                            id={gato.id}
                                            onClick={handleEliminar}>Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </>
                :
                <div className="exitoEliminado">
                    <p>¡Eliminado!</p>
                    <p><Link to="/" className='links roboto-thin'><button> VER TARJETAS</button></Link></p>
                </div>

            }
        </>
    )
}

export default Card;