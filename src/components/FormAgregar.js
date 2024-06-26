import "./Form.css";
import { useState } from "react";

function FormAgregar({ setFormAgregar }) {
    const [mensajeEnviado, setMensajeEnviado] = useState(false)
    const [errorEnvio, setErrorEnvio] = useState(false)
   
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
        console.log(formInfo)

        fetch(`http://localhost:4000/`, {
            method:`post`,
            body: JSON.stringify(formInfo), 
            headers:{
                "Content-Type":"application/json"}
            })
            .then((resp) =>{return resp.json()})
            .then((data) => {
                console.log(data)
                if (data.info.status === 201){
                    setMensajeEnviado(true) 
                    setTimeout(()=> { setMensajeEnviado(false) }, 2000)
                    setTimeout(()=>{ setFormAgregar(false) }, 2000)
                
                }else{
                    setMensajeEnviado(false)
                    setErrorEnvio(true)
                    setTimeout(()=>{ setErrorEnvio(false) }, 2000)
                }
            })
            .catch(err => console.log("No se logro enviar: " + err))
    }

    return (
       <div> 
        { (!mensajeEnviado && !errorEnvio) 
        ?
       <div className="formulario"> 
            <div className="titulo">
                <h2>NUEVO GATO</h2>
                <p>Completa el formulario con los datos del gato 
                y aparecerá en la página</p>
            </div>

             <div className="contenido">
                <form id="contactForm" onSubmit={(event)=>handlerForm(event)}>

                    <label htmlFor ="nombre">Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        placeholder="Ingresa nombre del gato" 
                        required 
                    />

                    <label htmlFor="sexo">Sexo</label>
                    <select name = "sexo" required>
                        <option value="">Selecciona sexo... </option>
                        <option value="hembra">Hembra</option>
                        <option value="macho">Macho</option>
                    </select>

                    <label htmlFor="raza">Raza</label>
                    <select name="raza" required>
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

                    <label htmlFor="edad">Edad</label>
                    <select name="edad" required>
                        <option value="">Selecciona edad... </option>
                        <option value="cachorro">Cachorro (Menor de 2 años)</option>
                        <option value="adulto">Adulto (2 a 7 años)</option>
                        <option value="adulto mayor">Adulto Mayor (mayor de 7 años)</option>
                    </select>

                    <label htmlFor="descripcion">Acerca de</label>
                    <textarea 
                        name="descripcion" 
                        id = "descripcion"
                        placeholder="Escribe algo sobre él" 
                        required>
                    </textarea>

                    <label htmlFor="img">Sube el link de su imagen (URL) </label>
                    <textarea 
                        name="img" 
                        id="img" 
                        placeholder="https://images.com/foto-gato-345622.jpg..." 
                        required>
                    </textarea>

                    <button type="submit" value="Enviar">Enviar</button>
                </form>
             </div>
        </div>

        : (mensajeEnviado)
        ?
        <div className="exitoEnvio">
        <p>¡Creado!</p>
        <button onClick = {()=>setFormAgregar(false)}> VER TARJETAS</button>
    </div>
        :
        <div className="errorEnvio">
             <p>Error en los datos ingresados, por favor verificalos e intenta nuevamente</p>
         </div>
        }

    </div>
    )
}

export default FormAgregar;