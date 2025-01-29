import React from "react"
import {Link} from "react-router-dom"
import {routes} from "../../router/routes"

const Navbar = () => {

    return (
        <>
            {/* TODO: navbar (logo + links) */}
            <nav>
                <Link to={routes.home}>Logo</Link>
            </nav>
        </>
    )
}

export default Navbar