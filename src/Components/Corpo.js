import NavBar from "./NavBar"
import StoriesContainer from "./stories-container"

export default function Corpo() {
    return (
        <div className="Corpo">
            <NavBar />
            <div class="main">
                <div class="coluna">

                    <StoriesContainer />
        //-------------------Posts----------------------
                    <div class="posts_container">
          //*----------Conteiner/Layout do post-----------
                        <div class="post">
                            <div class="head">
                                <div class="perfil">
                                    <img src="./img/stories/meowed 1.svg" alt="" />
                                    <p>meowed</p>
                                </div>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                            <img class="img_post" src="./img/posts/gato-telefone 1.png" />
                            <div class="footer">
                                <section class="icons_post">
                                    <span class="interact">
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </span>
                                    <span>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </span>
                                </section>
                                <section class="curtidas">
                                    <img src="./img/stories/respondeai 1.svg" />
                                    <p>
                                        Curtido por <a href="#">respondeai</a> e
                                        <a href="#">outras 101.523 pessoas</a>
                                    </p>
                                </section>
                                <section class="comentarios">
                                    <p>
                                        <a href="#">respondeai</a> Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit.
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </section>
                                <p class="ver_coments">Ver todos os 252 comentários</p>
                                <div class="comentar">
                                    <section>
                                        <ion-icon name="happy-outline"></ion-icon>
                                        <input placeholder="Adicione um comentário" type="text" />
                                    </section>
                                    <button>Publicar</button>
                                </div>
                            </div>
                        </div>

                        <div class="post">
                            <div class="head">
                                <div class="perfil">
                                    <img src="./img/stories/barked 1.svg" alt="" />
                                    <p>barked</p>
                                </div>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                            <img class="img_post" src="./img/posts/dog 1.png" />
                            <div class="footer">
                                <section class="icons_post">
                                    <span class="interact">
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </span>
                                    <span>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </span>
                                </section>
                                <section class="curtidas">
                                    <img src="./img/stories/9gag 1.svg" />
                                    <p>
                                        Curtido por <a href="#">9gag</a> e
                                        <a href="#">outras 25.843 pessoas</a>
                                    </p>
                                </section>
                                <section class="comentarios">
                                    <p>
                                        <a href="#">9gag</a> Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </section>
                                <p class="ver_coments">Ver todos os 193 comentários</p>
                                <div class="comentar">
                                    <section>
                                        <ion-icon name="happy-outline"></ion-icon>
                                        <input placeholder="Adicione um comentário" type="text" />
                                    </section>
                                    <button>Publicar</button>
                                </div>
                            </div>
                        </div>

                        <div class="post">
                            <div class="head">
                                <div class="perfil">
                                    <img src="./img/stories/meowed 1.svg" alt="" />
                                    <p>meowed</p>
                                </div>
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                            <video class="img_post" autoplay loop muted>
                                <source src="./img/posts/video.mp4" type="video/mp4" />
                                <source src="./img/posts/video.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                            <div class="footer">
                                <section class="icons_post">
                                    <span class="interact">
                                        <ion-icon name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </span>
                                    <span>
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </span>
                                </section>
                                <section class="curtidas">
                                    <img src="./img/stories/respondeai 1.svg" />
                                    <p>
                                        Curtido por <a href="#">respondeai</a> e
                                        <a href="#">outras 101.523 pessoas</a>
                                    </p>
                                </section>
                                <section class="comentarios">
                                    <p>
                                        <a href="#">respondeai</a> Lorem ipsum dolor sit, amet
                                        consectetur adipisicing elit. Eos, suscipit dolorem!
                                    </p>
                                    <ion-icon name="heart-outline"></ion-icon>
                                </section>
                                <p class="ver_coments">Ver todos os 252 comentários</p>
                                <div class="comentar">
                                    <section>
                                        <ion-icon name="happy-outline"></ion-icon>
                                        <input placeholder="Adicione um comentário" type="text" />
                                    </section>
                                    <button>Publicar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      //------------------Side bar--------------------
                <div class="sidebar">
                    <div class="nome">
                        <img src="./img/stories/catanacomics 1.svg" alt="" />
                        <div>
                            <a href="#">catanacomics</a>
                            <p>Catana</p>
                        </div>
                    </div>
                    <section class="sugestoes">
                        Sugestões para você <a href="#">Ver tudo</a>
                    </section>

                    <div class="sugestoes_perfil">
                        <div class="card_sugestoes">
                            <div class="card_perfil">
                                <img src="./img/perfil/badvibesmemes 1.svg" />
                                <div>
                                    <a href="#">bad.vibes.memes</a>
                                    <section class="sugestoes">Segue você</section>
                                </div>
                            </div>
                            <p>Seguir</p>
                        </div>

                        <div class="card_sugestoes">
                            <div class="card_perfil">
                                <img src="./img/perfil/chibirdart 1.svg" />
                                <div>
                                    <a href="#">chibirdart</a>
                                    <section class="sugestoes">Segue você</section>
                                </div>
                            </div>
                            <p>Seguir</p>
                        </div>

                        <div class="card_sugestoes">
                            <div class="card_perfil">
                                <img src="./img/perfil/razoesparaacreditar 1.svg" />
                                <div>
                                    <a href="#">razoesparaacreditar</a>
                                    <section class="sugestoes">Novo no Instagram</section>
                                </div>
                            </div>
                            <p>Seguir</p>
                        </div>

                        <div class="card_sugestoes">
                            <div class="card_perfil">
                                <img src="./img/perfil/adorableanimals 1.svg" />
                                <div>
                                    <a href="#">adorable_animals</a>
                                    <section class="sugestoes">Segue você</section>
                                </div>
                            </div>
                            <p>Seguir</p>
                        </div>

                        <div class="card_sugestoes">
                            <div class="card_perfil">
                                <img src="./img/perfil/smallcutecats 1.svg" />
                                <div>
                                    <a href="#">smallcutecats</a>
                                    <section class="sugestoes">Segue você</section>
                                </div>
                            </div>
                            <p>Seguir</p>
                        </div>
                    </div>
                    <p class="sobre">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                        Localizações • Contas mais relevantes • Hashtags • Idioma
                    </p>
                    <p class="sobre">© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
            </div>
        </div>
    )
}