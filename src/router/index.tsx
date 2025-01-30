import {Route, Routes} from "react-router-dom"
import Home from "../pages/home"
import {routes} from "./routes"
import NotFound from "../pages/data-containers/notFound"
import Logement from "../pages/logement"
import About from "../pages/about"

export default function Router() {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />}/>
            <Route path={routes.about} element={<About />}/>
            <Route path={routes.logement()} element={<Logement />}/>
            <Route path={routes.notFound} element={<NotFound />}/>
        </Routes>
    )
}