
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Route/Navbar'
import MyRoutes from './Route/MyRoutes'
import Home from "./Pages/Home"
import Footer from './components/Footer'


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Navbar/>
    <MyRoutes/>
    
    </BrowserRouter>
    <Footer/>
   
     

    
    </>
  )
}

export default App


