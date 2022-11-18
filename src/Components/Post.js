import { useState } from "react"

export default function Post(props) {
    let caminho = `assets/${props.post}`
    if (props.post.slice(0, 5) === 'https') {
        caminho = props.post
    }

    const [bookmarkFill, setBookmark] = useState('-outline')

    function fill() {
        if (bookmarkFill == '-outline') {
            setBookmark('')
        }
        else setBookmark('-outline')
    }

    return (
        <div className="post">
            <div className="head">
                <div className="perfil">
                    <img src={`assets/${props.nome} 1.svg`} alt="" />
                    <p>{props.nome}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <img className="img_post" src={caminho} />
            <div className="footer">
                <section className="icons_post">
                    <span className="interact">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </span>
                    <span>
                        <ion-icon onClick={fill} name={`bookmark${bookmarkFill}`}></ion-icon>
                    </span>
                </section>
                <section className="curtidas">
                    <img src={`assets/${props.curtiu.nome} 1.svg`} />
                    <p>
                        Curtido por <a href="#">{props.curtiu.nome}</a> e
                        <a href="#"> outras {props.curtiu.quant} pessoas</a>
                    </p>
                </section>
                <section className="comentarios">
                    <p>
                        <a href="#">{props.coment.nome}</a> {props.coment.text}
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