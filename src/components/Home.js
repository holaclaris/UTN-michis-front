import Banner from "./Banner";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
 

function Home(){
    return(
      <body className='roboto-medium'> 
        <Banner />
        <Header />
        <Main />
        <Footer />
      </body>  
    )
}
export default Home;