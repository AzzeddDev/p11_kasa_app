import AboutImgHero from "../../assets/img/image-source-header-a-propos.png"
import Header from "../../containers/header"

export default function About() {
    return (
        <>
            {/* TODO: Page a propos, ajouter des accordions */}
            <div className={"container mt-5"}>
                {/* Header */}
                <Header
                    bgImage={AboutImgHero}
                    title={"A propos"}
                />
            </div>
        </>
    )
}