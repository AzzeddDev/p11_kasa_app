import React from 'react'
import Router from "./router"
import Navbar from "./components/navbar"
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <div className="container mt-5">
              <Navbar/>
              <Router/>
          </div>
      </BrowserRouter>
  )
}

export default App
