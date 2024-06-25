import "./Form.css";
import { useState } from "react";

function FormEditar({ gatos, idGatoElegido, setMensajeEditado }) {

    const [mensajeActualizado, setMensajeActualizado] = useState(false)
    const [errorEnvio, setErrorEnvio] = useState(false)

    let gatoElegido = gatos.find(gato=>(gato.id.toString() === idGatoElegido))
   
    const handlerFormEditar = (e) => {
        e.preventDefault();
       
        let formInfo = {
            nombre:e.target[0].value,
            sexo:e.target[1].value,
            raza:e.target[2].value,
            edad:e.target[3].value,
            descripcion:e.target[4].value,
            img:e.target[5].value
        }

        fetch(`http://localhost:4000/${idGatoElegido}`, {
            method:`PATCH`,
            body: JSON.stringify(formInfo), 
            headers:{
                "Content-type":"application/json; charset=UTF-8",
            }
        })
            .then((resp) =>{return resp.json()})
            .then((data) => {
                console.log(data)
                if (data.info.status === 200){
                 setMensajeActualizado(true) 
                 setTimeout(()=> { setMensajeActualizado(false) }, 2000)
                 setTimeout(()=>{ setMensajeEditado(false) },2000)
                } 
                else if (data.info.status ===422){
                 setErrorEnvio(true)
                 setTimeout(()=>{ setErrorEnvio(false) }, 2000)
                }
            })
            .catch(err => console.log("No se logro enviar: " + err))
        }

    return (
       <div> 
        { (!mensajeActualizado && !errorEnvio)
        ? 
       <div className="formulario"> 
            <div className="titulo">
                <h2>EDITAR GATO</h2>
                <p>Cambia solamente los datos que quieras modificar. El resto quedara igual.</p>
            </div>
         
             <div className="contenido">
                    <form id="contactForm" onSubmit={handlerFormEditar}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Ingresa nombre del gato" defaultValue = {gatoElegido.nombre}/>

                    <p>Sexo</p>
                    <select name="sexo" defaultValue={gatoElegido.sexo}>
                        <option value="">Selecciona sexo... </option>
                        <option value="hembra">Hembra</option>
                        <option value="macho">Macho</option>
                    </select>

                    <p>Raza</p>
                    <select name="raza" defaultValue={gatoElegido.raza} >
                        <option value="">Selecciona raza... </option>
                        <option value="angora">Angora</option>
                        <option value="azul ruso">Azul ruso</option>
                        <option value="bengali">Bengali</option>
                        <option value="bosque de Noruega">Bosque de Noruega</option>
                        <option value="cartujo">Cartujo</option>
                        <option value="comun europeo">Comun europeo</option>
                        <option value="himalayo">Himalayo</option>
                        <option value="mixta">Mixta</option>
                        <option value="persa">Persa</option>
                        <option value="siames">Siames</option>
                        <option value="otra">Otra</option>
                    </select>

                    <p>Edad</p>
                    <select name="edad" defaultValue={gatoElegido.edad} >
                        <option value="">Selecciona edad... </option>
                        <option value="cachorro">Cachorro (Menor de 2 años)</option>
                        <option value="adulto">Adulto (2 a 7 años)</option>
                        <option value="adulto mayor">Adulto Mayor (mayor de 7 años)</option>
                    </select>

                    <label htmlFor="descripcion">Acerca de</label>
                    <textarea id="descripcion" name="descripcion" placeholder="Escribe algo sobre él" defaultValue={gatoElegido.descripcion}></textarea>

                    <label htmlFor="img">Sube el link de su imagen (URL) </label>
                    <textarea name="img" id="img" placeholder="https://images.com/foto-gato-345622.jpg..." defaultValue={gatoElegido.img}></textarea>

                    <button type="submit" value="Enviar">Enviar</button>
                </form>
             </div>
        </div>
        : 
        (mensajeActualizado && !errorEnvio)
        ?
        <div className="exitoEditado">
            <p>¡Actualizado!</p>
            <p> Cargando tarjetas...</p>
        </div>
        :
        <div className="errorEnvio">
            <p>Error - Todos los campos deben estar completos. Intenta nuevamente</p>
        </div>
        }
       
    </div>
    )
}
export default FormEditar;