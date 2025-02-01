import React from "react"
import styled from "styled-components"

const Hero = styled.div`
  background-image: url(${(props) => props.bgImage});
`

const Header = ({ bgImage, title }) => {
    return (
        <section className={"col-12"}>
            <Hero bgImage={bgImage} className={"headerHero"}>
                <h1 className="bigTitle">{title}</h1>
            </Hero>
        </section>
    )
}

export default Header