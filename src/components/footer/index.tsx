import logo from "../../assets/img/logo-kasa-footer.png"

const Footer = () => {

    return(
        <>
            <div className={"container-fluid footer"}>
                <img src={logo} alt=""/>
                <p>© 2025 Kasa. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer