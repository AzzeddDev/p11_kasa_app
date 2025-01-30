import useFetchLogements from "../../data/hooks/useFetchLogements"
import Card from "../../components/card"
import {routes} from "../../router/routes"
import Loading from "../data-containers/loading"

const Home = () => {
    const { logements, loading, error } = useFetchLogements()

    return (
        <>
            <div className={"container mt-5"}>
                {/* TODO: hero + titre -> container + children */}
                {/* TODO: map card component logements */}

                {loading && <Loading />}
                {error && <p className={"text-danger"}>{error}</p>}

                <div className={"row g-5"}>
                    {logements.map((logement, i) => (
                        <Card
                            key={i}
                            title={logement.title}
                            to={routes.logement(logement.id)}
                            backgroundUrl={logement.cover}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home