import "./Card.css";
import { Fragment } from 'react';

const Card = ({ gatos }) => {


    return (
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
                                    <p>Edad: {gato.edad}</p>
                                    <p>Raza: {gato.raza}</p>
                                    <p>Acerca de: {gato.descripcion}</p>
                                </div>
                                <button>Eliminar</button>
                                <button>Editar</button>
                            </div>

                        </div>
                    </div>
                ))
            }
        </>

    )
}
export default Card;