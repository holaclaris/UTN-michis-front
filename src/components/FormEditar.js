import "./Form.css";
import { useState } from "react";
import {Link} from 'react-router-dom';

function FormEditar({ gatos, idGatoElegido }) {

    const [mensaje, setMensaje] = useState(false)

    let gatoElegido = gatos.find(gato=>(gato.id.toString() === idGatoElegido))
   
    const handlerForm = (e) => {
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
            body: JSON.stringify(formInfo), //transformo info en json
            headers:{
                "Content-type":"application/json; charset=UTF-8",
            }
        })
            .then((resp) =>{return resp.json()})
            .then((data) => {
                console.log(data)
                 data.info.status === 200 ? setMensaje(true) : setMensaje(false);
                 setTimeout(() => { setMensaje(false) }, 3000)
            })
            .catch(err => console.log("No se logro enviar: " + err))
    }

    return (
       <div> 
        { mensaje === false ? 
       <div className="formulario"> 
            <div className="titulo">
                <h2>EDITAR GATO</h2>
                <p>Actualiza los datos que quieras modificar</p>
            </div>

             <div className="contenido">
                <form id="contactForm" onSubmit={(event)=>handlerForm(event)}>
                    <label htmlFor="nombre"> Nombre del gato: </label>
                    <input type="text" name="nombre" id="nombre" placeholder="Ingresa nombre del gato" defaultValue = {gatoElegido.nombre}/>

                    <p>Sexo: </p>
                    <select name="sexo" defaultValue={gatoElegido.sexo}>
                        <option value="">Seleccionar sexo... </option>
                        <option value="hembra">Hembra</option>
                        <option value="macho">Macho</option>
                    </select>

                    <p>Raza: </p>
                    <select name="raza" defaultValue={gatoElegido.raza} >
                        <option value="">Seleccionar raza... </option>
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

                    <p>Edad: </p>
                    <select name="edad" defaultValue={gatoElegido.edad} >
                        <option value="">Seleccionar edad... </option>
                        <option value="cachorro">Cachorro (Menor de 2 años)</option>
                        <option value="adulto">Adulto (2 a 7 años)</option>
                        <option value="adulto mayor">Adulto Mayor (mayor de 7 años)</option>
                    </select>

                    <label htmlFor="descripcion">Acerca de: </label>
                    <textarea id="descripcion" name="descripcion" placeholder="Escribe algo sobre él" defaultValue={gatoElegido.descripcion}></textarea>

                    <label htmlFor="img">Sube el link de su imagen (URL) </label>
                    <textarea name="img" id="img" placeholder="https://images.com/foto-gato-345622.jpg..." defaultValue={gatoElegido.img}></textarea>

                    <button type="submit" value="Enviar">Enviar</button>
                </form>
             </div>
        </div>
        : 
        <div className="exitoEditado">
            <p>¡Actualizado!</p>
            <p><Link to="/" className='links roboto-thin'><button> VER TARJETAS</button></Link></p>
        </div>}
    </div>
    )
}
export default FormEditar;