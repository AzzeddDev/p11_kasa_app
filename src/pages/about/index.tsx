import AboutImgHero from "../../assets/img/image-source-header-a-propos.png"
import Header from "../../containers/header"
import Accordion from "../../components/accordion";

const About = () => {
    return (
        <>
            {/* TODO: Page a propos, ajouter des accordions */}
            <div className={"container mt-5"}>
                {/* Header */}
                <Header
                    bgImage={AboutImgHero}
                    title={"A propos"}
                />

                <div className={"col d-flex flex-column align-items-center mb-5"}>
                    <div className={"col-md-10 d-flex flex-column gap-4"}>
                        <Accordion
                            title={"Fiabilité"}
                            content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}
                        />

                        <Accordion
                            title={"Respect"}
                            content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
                        />

                        <Accordion
                            title={"Service"}
                            content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
                        />

                        <Accordion
                            title={"Sécurité"}
                            content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About