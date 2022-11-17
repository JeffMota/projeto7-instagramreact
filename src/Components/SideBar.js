export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="nome">
                <img src="./img/stories/catanacomics 1.svg" alt="" />
                <div>
                    <a href="#">catanacomics</a>
                    <p>Catana</p>
                </div>
            </div>
            <section className="sugestoes">
                Sugestões para você <a href="#">Ver tudo</a>
            </section>

            <div className="sugestoes_perfil">
                <div className="card_sugestoes">
                    <div className="card_perfil">
                        <img src="./img/perfil/badvibesmemes 1.svg" />
                        <div>
                            <a href="#">bad.vibes.memes</a>
                            <section className="sugestoes">Segue você</section>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>

                <div className="card_sugestoes">
                    <div className="card_perfil">
                        <img src="./img/perfil/chibirdart 1.svg" />
                        <div>
                            <a href="#">chibirdart</a>
                            <section className="sugestoes">Segue você</section>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>

                <div className="card_sugestoes">
                    <div className="card_perfil">
                        <img src="./img/perfil/razoesparaacreditar 1.svg" />
                        <div>
                            <a href="#">razoesparaacreditar</a>
                            <section className="sugestoes">Novo no Instagram</section>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>

                <div className="card_sugestoes">
                    <div className="card_perfil">
                        <img src="./img/perfil/adorableanimals 1.svg" />
                        <div>
                            <a href="#">adorable_animals</a>
                            <section className="sugestoes">Segue você</section>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>

                <div className="card_sugestoes">
                    <div className="card_perfil">
                        <img src="./img/perfil/smallcutecats 1.svg" />
                        <div>
                            <a href="#">smallcutecats</a>
                            <section className="sugestoes">Segue você</section>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>
            </div>
            <p className="sobre">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma
            </p>
            <p className="sobre">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    )
}