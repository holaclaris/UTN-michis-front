import "./Form.css";

function Form() {
    return (
        <div className="formulario">
            <div className="titulo">
                <h2>AGREGAR GATITO</h2>
                <p>Completa el formulario con los datos de tu gatito </p>
                <p>Pronto aparecera en nuestra pagina</p>
            </div>
            <div className="contenido">
                <form id="contactForm">
                    <input type="text" id="name" name="name" placeholder="Nombre del gato" /><br />
                    <input type="email" id="email" name="email" placeholder="Correo electrónico" /><br />
                    <input type="tel" name="telefono" id="telefono" placeholder="Teléfono de contacto" /><br />
                    <textarea id="mensaje" name="mensaje" placeholder="Escribe algo sobre él"></textarea><br />
                    <button type="submit" onclick="return enviarFormulario();" value="Enviar">Enviar</button>
                </form>
            </div>
        </div>
    )
}
export default Form;