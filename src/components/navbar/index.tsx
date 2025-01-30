import React from "react"
import {Link} from "react-router-dom"
import {routes} from "../../router/routes"

const Navbar = () => {

    return (
        <>
            {/* TODO: navbar (logo + links) */}
            <nav>
                <div className="d-flex justify-content-between">
                    <Link to={routes.home}>Logo</Link>
                    <div className="d-flex gap-3">
                        <Link to={routes.home}>Accueil</Link>
                        <Link to={routes.about}>A Propos</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar