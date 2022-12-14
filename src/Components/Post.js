import { useState } from "react"

export default function Post(props) {
    let caminho = `assets/${props.post}`
    if (props.post.slice(0, 5) === 'https') {
        caminho = props.post
    }

    const [bookmarkFill, setBookmark] = useState('-outline')
    const [heartFill, setHeart] = useState('-outline')
    const [classFill, setClass] = useState('')
    const [state, setState] = useState('hidden')
    const [animate, setAnimate] = useState('')

    function fillBookMark() {
        if (bookmarkFill == '-outline') {
            setBookmark('')
        }
        else setBookmark('-outline')
    }
    function fillHeart() {
        if (heartFill == '-outline') {
            setHeart('')
            setClass('filled')
            props.curtiu.quant += 1
        }
        else {
            setHeart('-outline')
            setClass('')
            props.curtiu.quant -= 1
        }
    }
    function fillHeartImg() {
        if (heartFill == '-outline') {
            setHeart('')
            setClass('filled')
            props.curtiu.quant += 1
        }
        setState('')
        setAnimate('animate')
        setTimeout(() => { setState('hidden') }, 500)
    }

    return (
        <div data-test="post" className="post">
            <div className="head">
                <div className="perfil">
                    <img src={`assets/${props.nome} 1.svg`} alt="" />
                    <p>{props.nome}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div className="box-img">
                <img data-test="post-image" onDoubleClick={fillHeartImg} className="img_post" src={caminho} />
                <div className={`animatedHeart ${state} ${animate}`} ><ion-icon name={`heart`}></ion-icon></div>
            </div>
            <div className="footer">
                <section className="icons_post">
                    <span className="interact">
                        <span className={classFill}> <ion-icon data-test="like-post" onClick={fillHeart} name={`heart${heartFill}`}></ion-icon></span>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </span>
                    <span>
                        <ion-icon data-test="save-post" onClick={fillBookMark} name={`bookmark${bookmarkFill}`}></ion-icon>
                    </span>
                </section>
                <section className="curtidas">
                    <img src={`assets/${props.curtiu.nome} 1.svg`} />
                    <p>
                        Curtido por <a href="#">{props.curtiu.nome}</a> e
                        <a href="#"> outras <span data-test="likes-number" >{props.curtiu.quant}</span> pessoas</a>
                    </p>
                </section>
                <section className="comentarios">
                    <p>
                        <a href="#">{props.coment.nome}</a> {props.coment.text}
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </section>
                <p className="ver_coments">Ver todos os 252 coment??rios</p>
                <div className="comentar">
                    <section>
                        <ion-icon name="happy-outline"></ion-icon>
                        <input placeholder="Adicione um coment??rio" type="text" />
                    </section>
                    <button>Publicar</button>
                </div>
            </div>
        </div>
    )
}