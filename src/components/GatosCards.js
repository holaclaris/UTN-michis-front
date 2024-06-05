import React, {useEffect, useState} from 'react';
import Card from './Card';

function GatosCards(){
const [gatos, setGatos] = useState([]);

    const url = "http://localhost:4000"
    const fetchGatos = (url) =>{
        fetch(url)
          .then(response=>response.json())
          .then(gatos => setGatos(gatos.data))
          .catch(error => console.log(error))

    };

    useEffect(()=>{
        fetchGatos(url)

    },[])

    return(
        <div className = "contenedorGatos">
            <Card gatos={gatos} />
        </div>
    )
}
export default GatosCards;