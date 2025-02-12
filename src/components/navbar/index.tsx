import React from "react"
import {Link} from "react-router-dom"
import {routes} from "../../router/routes"
import logo from "../../assets/img/logo-kasa.png"
import Button from "../button/button"

const Navbar = () => {

    return (
        <>
            <nav className={"container navBar"}>
                <div className={"col-5"}>
                    <Link to={routes.home}>
                        <img className={"navBar__logo"} src={logo} alt=""/>
                    </Link>
                </div>
                <div className="navBar__buttons d-flex col-7 justify-content-end">
                    <Button to={routes.home} className={"buttonNavbar"}>
                        Accueil
                    </Button>
                    <Button to={routes.about} className={"buttonNavbar"}>
                        A propos
                    </Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar