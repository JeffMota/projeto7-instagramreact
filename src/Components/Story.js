export default function Story(props) {
    return (
        <div className="stories_box">
            <div className="stories">
                <img src={`assets/${props.nome} 1.svg`} alt="" srcset="" />
            </div>
            <p>{(props.nome.length > 7) ? props.nome.slice(0, 7)+'...':props.nome}</p>
        </div>
    )
}