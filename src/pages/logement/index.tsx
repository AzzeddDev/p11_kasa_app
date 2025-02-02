import {useParams} from "react-router-dom"
import NotFound from "../data-containers/notFound"
import useFetchSingleLogement from "../../data/hooks/useFetchSingleLogement"
import starFilled from "../../assets/img/star-filed.png"
import starEmpty from "../../assets/img/star-empty.png"
import Loading from "../data-containers/loading";
import React from "react";

export default function Logement () {
    const { id } = useParams<{ id: string }>()
    const { logement, loading, error } = useFetchSingleLogement(id)

    if (!logement) return <NotFound/>

    return (
        <>
            {/* TODO: créer un composent accordion */}
            {/* TODO: créer un carousel */}
            <section>
                {loading && <Loading />}
                {error && <p className={"text-danger"}>{error}</p>}

                <div className={"container logTemplate"}>
                    <img className="logTemplate__cover img-fluid rounded" src={logement.cover} alt={logement.title} />
                    <div className={"row logTemplate__left"}>
                        <div className={"col-md-8"}>
                            <div className={"mb-3"}>
                                <h1>{logement.title}</h1>
                                <p className={"logTemplate__left__location"}>{logement.location}</p>
                            </div>

                            <div className="logTemplate__left__tags">
                                {logement.tags.map((tag, index) => (
                                    <span key={index} className="logTemplate__left__tags__badge me-2">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className={"col-md-4 logTemplate__right"}>
                            <div className={"logTemplate__right__user"}>
                                <div className={"logTemplate__right__user__userName"}>
                                    {logement.host.name.split(" ")[0]}<br/>
                                    {logement.host.name.split(" ")[1]}
                                </div>
                                <img className={"logTemplate__right__user__userPicture"} src={logement.host.picture}/>
                            </div>

                            <div className={"logTemplate__right__note"}>
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={i < Number(logement?.rating) ? starFilled : starEmpty}
                                        alt={i < Number(logement?.rating) ? "Étoile remplie" : "Étoile vide"}
                                        className="logTemplate__right__star"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}