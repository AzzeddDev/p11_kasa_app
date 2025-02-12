import {routes} from "../../router/routes"
import Button from "../../components/button/button"

const NotFound = () => {
    return (
        <div className={"container"}>
            <div className={"errorPage text-center"}>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Button to={routes.home} className={"buttonDefault"}>Retourner sur la page d’accueil</Button>
            </div>
        </div>
    )
}

export default NotFound