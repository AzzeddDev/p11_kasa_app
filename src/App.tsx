import React from 'react'
import Router from "./router"
import Navbar from "./components/navbar"
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer"

const App = () => {
  return (
      <BrowserRouter>
          <div className="container mt-5">
              <Navbar/>
              <Router/>
              <Footer/>
          </div>
      </BrowserRouter>
  )
}

export default App
