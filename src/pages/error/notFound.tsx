import {Link} from "react-router-dom"
import {routes} from "../../router/routes"

const NotFound = () => {
    return (
        <div className={"text-center mt-5"}>
            {/* TODO: re-designer la page 404 */}
            <h1 className={"text-danger"}>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={routes.home} className={"btn"}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound