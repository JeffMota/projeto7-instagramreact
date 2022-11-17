export default function PostsContainer() {
    return (
        <div className="posts_container">
          //*----------Conteiner/Layout do post-----------
            <div className="post">
                <div className="head">
                    <div className="perfil">
                        <img src="./img/stories/meowed 1.svg" alt="" />
                        <p>meowed</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img className="img_post" src="./img/posts/gato-telefone 1.png" />
                <div className="footer">
                    <section className="icons_post">
                        <span className="interact">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </span>
                        <span>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </span>
                    </section>
                    <section className="curtidas">
                        <img src="./img/stories/respondeai 1.svg" />
                        <p>
                            Curtido por <a href="#">respondeai</a> e
                            <a href="#">outras 101.523 pessoas</a>
                        </p>
                    </section>
                    <section className="comentarios">
                        <p>
                            <a href="#">respondeai</a> Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </section>
                    <p className="ver_coments">Ver todos os 252 comentários</p>
                    <div className="comentar">
                        <section>
                            <ion-icon name="happy-outline"></ion-icon>
                            <input placeholder="Adicione um comentário" type="text" />
                        </section>
                        <button>Publicar</button>
                    </div>
                </div>
            </div>

            <div className="post">
                <div className="head">
                    <div className="perfil">
                        <img src="./img/stories/barked 1.svg" alt="" />
                        <p>barked</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img className="img_post" src="./img/posts/dog 1.png" />
                <div className="footer">
                    <section className="icons_post">
                        <span className="interact">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </span>
                        <span>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </span>
                    </section>
                    <section className="curtidas">
                        <img src="./img/stories/9gag 1.svg" />
                        <p>
                            Curtido por <a href="#">9gag</a> e
                            <a href="#">outras 25.843 pessoas</a>
                        </p>
                    </section>
                    <section className="comentarios">
                        <p>
                            <a href="#">9gag</a> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </section>
                    <p className="ver_coments">Ver todos os 193 comentários</p>
                    <div className="comentar">
                        <section>
                            <ion-icon name="happy-outline"></ion-icon>
                            <input placeholder="Adicione um comentário" type="text" />
                        </section>
                        <button>Publicar</button>
                    </div>
                </div>
            </div>

            <div className="post">
                <div className="head">
                    <div className="perfil">
                        <img src="./img/stories/meowed 1.svg" alt="" />
                        <p>meowed</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <video className="img_post" autoplay loop muted>
                    <source src="./img/posts/video.mp4" type="video/mp4" />
                    <source src="./img/posts/video.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div className="footer">
                    <section className="icons_post">
                        <span className="interact">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </span>
                        <span>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </span>
                    </section>
                    <section className="curtidas">
                        <img src="./img/stories/respondeai 1.svg" />
                        <p>
                            Curtido por <a href="#">respondeai</a> e
                            <a href="#">outras 101.523 pessoas</a>
                        </p>
                    </section>
                    <section className="comentarios">
                        <p>
                            <a href="#">respondeai</a> Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Eos, suscipit dolorem!
                        </p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </section>
                    <p className="ver_coments">Ver todos os 252 comentários</p>
                    <div className="comentar">
                        <section>
                            <ion-icon name="happy-outline"></ion-icon>
                            <input placeholder="Adicione um comentário" type="text" />
                        </section>
                        <button>Publicar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}