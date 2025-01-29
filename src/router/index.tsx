import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/home"
import {routes} from "./routes"
import NotFound from "../pages/error/notFound"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.notFound} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}