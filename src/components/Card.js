import "./Card.css";

const Card = ({ gatos, mensajeEliminado,handleEliminar }) => {



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
         <p>Eliminado!</p>
         </div>
         
         }
    </>
    )
}

export default Card;