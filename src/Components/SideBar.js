import Sugestoes from "./Sugestoes";


export default function SideBar() {
    return (
        <div className="sidebar">
            <User />
            <SugesTitle />
            <Sugestoes />
            <Sobre />
        </div>
    )
}

function User() {
    return (
        <div className="nome">
            <img src="assets/catanacomics 1.png" alt="" />
            <div>
                <a href="#">catanacomics</a>
                <p>Catana</p>
            </div>
        </div>
    )
}

function Sobre() {
    return (
        <>
            <p className="sobre">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <p className="sobre">© 2021 INSTAGRAM DO FACEBOOK</p>
        </>
    )
}

function SugesTitle() {
    return (
        <section className="sugestoes">
            Sugestões para você <a href="#">Ver tudo</a>
        </section>
    )
}