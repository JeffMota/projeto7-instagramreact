export default function Sugestao(props) {
    return (
        <div className="card_sugestoes">
            <div className="card_perfil">
                <img src={`assets/sugest/${props.elm.nome} 1.svg`} />
                <div>
                    <a href="#">{props.elm.nome}</a>
                    <section className="sugestoes">{props.elm.state}</section>
                </div>
            </div>
            <p>Seguir</p>
        </div>
    )
}