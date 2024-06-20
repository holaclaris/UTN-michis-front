import "./Form.css";
import { useState } from "react";
import {Link} from 'react-router-dom';

function Form() {
    const [mensaje, setMensaje] = useState(false)
   
    const handlerForm = (e) => {
        e.preventDefault();
       
        let formInfo = {
            nombre:e.target[0].value,
            sexo:e.target[1].value,
            edad:e.target[2].value,
            raza:e.target[3].value,
            descripcion:e.target[4].value,
            img:e.target[5].value
        }
        console.log(formInfo)

        fetch("http://localhost:4000/", {
            method:'post',
            body: JSON.stringify(formInfo), //transformo info en json
            headers:{
                "Content-Type":"application/json"
            }})
            .then((resp) =>{return resp.json()})
            .then((data) => {
                console.log(data)
                 data.info.status === 201 ? setMensaje(true) : setMensaje(false);
                 setTimeout(() => { setMensaje(false) }, 3000)
            })
            .catch(err => console.log("No se logro enviar: " + err))
    }

    return (
       <div> 
        { mensaje === false ? 
       <div className="formulario"> 
            <div className="titulo">
                <h2>AÑADIR GATO</h2>
                <p>Completa el formulario con los datos del gato y aparecerá en la página</p>
            </div>

            

             <div className="contenido">
                <form id="contactForm" onSubmit={(event)=>handlerForm(event)}>
                    <label htmlFor="nombre">Nombre del gato: </label>
                    <input type="text" name="nombre" id="nombre" placeholder="Ingresa nombre del gato" required />

                    <p>Sexo: </p>
                    <select name="sexo" required>
                        <option value="">Seleccionar sexo... </option>
                        <option value="hembra">Hembra</option>
                        <option value="macho">Macho</option>
                    </select>

                    <p>Raza: </p>
                    <select name="raza" required>
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
                    <select name="edad" required>
                        <option value="">Seleccionar edad... </option>
                        <option value="cachorro">Cachorro (Menor de 2 años)</option>
                        <option value="adulto">Adulto (2 a 7 años)</option>
                        <option value="adulto mayor">Adulto Mayor (mayor de 7 años)</option>
                    </select>

                    <label htmlFor="descripcion">Acerca de: </label>
                    <textarea id="descripcion" name="descripcion" placeholder="Escribe algo sobre él" required></textarea>

                    <label htmlFor="img">Sube el link de su imagen (URL) </label>
                    <textarea name="img" id="img" placeholder="https://images.com/foto-gato-345622.jpg..." required></textarea>

                    <button type="submit" value="Enviar">Enviar</button>
                </form>
             </div>
        </div>
        : 
        <div className="exitoEnvio">
        <p>¡Enviado!</p>
        <p><Link to="/" className='links roboto-thin'><button> VER TARJETAS</button></Link></p>
        </div>}
    </div>
    )
}
export default Form;