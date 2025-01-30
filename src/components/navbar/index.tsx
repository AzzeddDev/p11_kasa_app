import React from "react"
import {Link} from "react-router-dom"
import {routes} from "../../router/routes"
import logo from "../../assets/img/logo-kasa.png"
import Button from "../button/button"

const Navbar = () => {

    return (
        <>
            {/* TODO: navbar (logo + links) */}
            <nav className={"container navBar"}>
                <Link to={routes.home}>
                    <img className={"navBar__logo"} src={logo} alt=""/>
                </Link>
                <div className="d-flex gap-5">
                    <Button to={routes.home}>Accueil</Button>
                    <Button to={routes.about}>A propos</Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar