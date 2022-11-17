export default function NavBar() {
    return (
        <div className="NavBar">
            <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div></div>
                <img src="/public/assets/logo.png" alt="logo" class="img_logo" />
                <ion-icon class="direct" name="paper-plane-outline"></ion-icon>
            </div>
            <input placeholder="Pesquisar" type="text" />
            <div class="icons">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}