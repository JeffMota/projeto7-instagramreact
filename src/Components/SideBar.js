import Sugestoes from "./Sugestoes";
import { useState } from "react";


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
    const [name, setName] = useState('Catana');
    const [usrImg, setUrlImg] = useState("assets/catanacomics 1.png");

    function changeName(){
        let aux = ''
        while(aux == ''){
            aux = prompt('Insira seu nome:')
        }
        if(aux != ''){
            setName(aux)
        }else setName('Catana')
        
    }
    function changeImg(){
        let aux = ''
        while(aux == ''){
            aux = prompt('Insira o URL da imagem:')
        }
        if(aux){
            setUrlImg(aux)
        }else setUrlImg("assets/catanacomics 1.png")
    }

    return (
        <div data-test="user" className="nome">
            <img data-test="profile-image" onClick={changeImg} src={usrImg} alt="" />
            <div>
                <a href="#">catanacomics</a>
                <p><span data-test='name' >{name}</span> <ion-icon data-test="edit-name" onClick={changeName} name="pencil-outline"></ion-icon></p>
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