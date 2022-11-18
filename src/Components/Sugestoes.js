import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const list = [{nome:'bad.vibes.memes', state:'Segue você'}, {nome:'chibirdart', state:'Segue você'}, {nome:'razoesparaacreditar', state:'Novo no Instagram'}, {nome:'adorable-animals', state:'Segue você'}, {nome:'smallcutecats', state:'Novo no Instagram'}]

    return (
        <div className="sugestoes_perfil">
            {list.map((elm) => <Sugestao elm={elm}/>)}

        </div>
    )
}