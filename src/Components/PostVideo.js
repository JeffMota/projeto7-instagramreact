export default function PostVideo(props) {
    return (
        <div className="post">
            <div className="head">
                <div className="perfil">
                    <img src={`assets/${props.nome} 1.svg`} alt="" />
                    <p>{props.nome}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <video className="img_post" autoplay loop muted>
                <source src={`assets/${props.post}.mp4`} type="video/mp4" />
                <source src={`assets/${props.post}.ogv`} type="video/ogg" />
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
    )
}