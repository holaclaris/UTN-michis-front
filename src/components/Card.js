import "./Card.css";

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
                                    <p>Raza: {gato.raza}</p>
                                    <p>Edad: {gato.edad}</p>
                                    <p>Acerca de: {gato.descripcion}</p>
                                </div>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    )
}
export default Card;