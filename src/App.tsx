import React from 'react'
import Router from "./router"
import Navbar from "./components/navbar"
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer"

const App = () => {
  return (
      <BrowserRouter>
          <section className="container-fluid p-0">
              <Navbar/>
              <Router/>
              <Footer/>
          </section>
      </BrowserRouter>
  )
}

export default App
