import "./Card.css";

const Card = ({ gatos }) =>{
    return(
       <div>
          {
            gatos.map((gato)=>(
                <div key ={gato.id} className="tarjetaGato">
                    <div>
                        <img src={gato.img} alt={gato.nombre} />
                        <div>
                            <h3>{gato.nombre}</h3>
                            <p>Sexo: {gato.sexo}</p>
                            <p>Edad: {gato.edad}</p>
                            <p>Acerca de: {gato.descripcion}</p>
                            <button>Eliminar</button><button>Editar</button>
                        </div>
                        
                    </div>
                </div>
            ))
          }
       </div>

    )
}
export default Card;