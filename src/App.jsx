import { Outlet } from "react-router-dom"
import "./App.css";
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
