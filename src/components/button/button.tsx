import {Link} from "react-router-dom"

const Button = ({to, children}) => {
    return (
        <Link to={to} className={"buttonDefault"}>
            {children}
        </Link>
    )
}

export default Button