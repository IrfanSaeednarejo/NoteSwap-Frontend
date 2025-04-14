
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {Outlet} from "react-router-dom"

const App = () => {
  

  return (
    <div>
    
      <Header/>
      <Outlet/>
      <Footer/>


    </div>

  )
}
export default App