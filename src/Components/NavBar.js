export default function NavBar() {
    return (
        <div className="NavBar">
            <Logo />
            <input placeholder="Pesquisar" type="text" />
            <Icons />
        </div>
    )
}

function Logo() {
    return (
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div></div>
            <img src="assets/logo.png" alt="logo" className="img_logo" />
            <span className="direct" ><ion-icon name="paper-plane-outline"></ion-icon></span>
        </div>
    )
}

function Icons() {
    return (
        <div className="icons">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    )
}