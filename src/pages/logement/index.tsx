import {useParams} from "react-router-dom";

export default function Logement () {
    const { logement } = useParams()

    return (
        <>
            {/* TODO: créer un composent accordion */}
            <div>Template page de Logement</div>
        </>
    )
}