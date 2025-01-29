import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/home"
import {routes} from "./routes"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}