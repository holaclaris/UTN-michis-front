import Banner from "./Banner";
import Header from "./Header";
import Main from "./Main";
import FormAgregar from "./FormAgregar"
import Footer from "./Footer";
import { useState } from "react";

function Home(){

  const [filtrados, setFiltrados] = useState("")
  //Prueba
  const [formAgregar, setFormAgregar] = useState(false)

  const handlerFormBuscar = (e)=>{
    e.preventDefault()
    setFiltrados("")

    fetch(`http://localhost:4000/searchtodo?todo=${e.target[0].value}`)
    .then(res=>res.json())
    .then(res => {
      if(res.info.status===200){
        setFiltrados(res.data)
      }else{
        console.log("No se encontraron gatos")
      }
    })    
    .then(e.target[0].value ="")
    .catch(err => console.log(err))
  }

    return(
      <body className='roboto-medium'> 
        <Banner />
        <Header 
          setFormAgregar = {setFormAgregar}
          handlerFormBuscar= {handlerFormBuscar}
          setFiltrados = {setFiltrados}
        />
      
      { !formAgregar
        ?
        <Main 
          filtrados = {filtrados}
          setFiltrados = {setFiltrados}
        />
        :
        <FormAgregar 
          setFormAgregar = {setFormAgregar}
        />
      }
        <Footer />
      </body>  
    )
}
export default Home;