import {useEffect, useState} from "react"
import {fetchLogements} from "../../data/fetchLogements"
import {Link} from "react-router-dom"
import {routes} from "../../router/routes"

const Home = () => {
    const [logements, setLogements] = useState<any[]>([])

    useEffect(() => {
        const loadLogements = async () => {
            const data = await fetchLogements()
            setLogements(data)
        }
        loadLogements()
    }, [])

    return (
        <>
            <div className={"container mt-5"}>
                {/* TODO: hero + titre -> container + children */}
                {/* TODO: map card component logements */}
                <div className={"row g-3"}>
                    {logements.map((logement, i) => (
                        <div className={"col-md-4"} key={i}>
                            <h2>{logement.title}</h2>
                            <Link to={routes.logement(logement.id)}>Voir l'annonce</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home