import {Link} from "react-router-dom"
import {routes} from "../../router/routes"

const NotFound = () => {
    return (
        <div className={"text-center mt-5"}>
            <h1 className={"text-danger"}>404 - Page non trouver</h1>
            <p>La page que vous essayer de chercher n'a pas été trouver</p>
            <Link to={routes.home} className={"btn btn-primary"}>Retour a l'accueil</Link>
        </div>
    )
}

export default NotFound