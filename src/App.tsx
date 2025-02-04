import React from 'react'
import Router from "./router"
import Navbar from "./components/navbar"
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer"

const App = () => {
  return (
      <BrowserRouter>
          <header>
              <Navbar/>
          </header>
          <main>
              <section className="container-fluid p-0">
                  <Router/>
              </section>
          </main>
          <Footer/>
      </BrowserRouter>
  )
}

export default App
