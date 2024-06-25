import Banner from "./Banner";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
 

function Home(){

  const [gatosFiltrados, setGatosFiltrados] = useState("")

  const handlerFormBuscar = (e)=>{
    e.preventDefault()
    let busqueda = e.target[0].value
    console.log(busqueda)

    fetch(`http://localhost:4000/search-all?todo=${busqueda}`)
    .then(res=>res.json())
    .then(res => setGatosFiltrados(res.data) )
    .then(e.target[0].value ="")
    .then(console.log(gatosFiltrados))
    .catch(err => console.log(err))
  }

    return(
      <body className='roboto-medium'> 
        <Banner />
        <Header handlerFormBuscar= {handlerFormBuscar} />
        <Main gatosFiltrados={gatosFiltrados}/>
        <Footer />
      </body>  
    )
}
export default Home;