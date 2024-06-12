import React, {useEffect, useState} from 'react';
import './GatosCards.css'
import Card from './Card';

function GatosCards() {

    const [gatos, setGatos] = useState([]);

    const traerGatos = () => {
        fetch("http://localhost:4000/")
            .then(response => response.json())
            .then(gatos => setGatos(gatos.data))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        traerGatos()
    }, [])

    return (
        <div className="contenedorGatos">
            <Card gatos={gatos} />
        </div>
    )
}
export default GatosCards;