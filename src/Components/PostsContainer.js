import Post from "./Post"
import PostVideo from "./PostVideo"

export default function PostsContainer() {
    const lista = [
        {
            tipo: 'img',
            nome: 'meowed',
            post: 'gato-telefone 1.png',
            curtiu: { nome: 'respondeai', quant: 13 },
            coment: { nome: 'respondeai', text: 'Coisa mais fofa no mundo!' }
        },
        {
            tipo: 'img',
            nome: 'barked',
            post: 'dog 1.png',
            curtiu: { nome: '9gag', quant: 8 },
            coment: { nome: '9gag', text: 'É isso, vou vender meu carro' }
        },
        {
            tipo: 'video',
            nome: 'barked',
            post: 'video',
            curtiu: { nome: '9gag', quant: 20 },
            coment: { nome: '9gag', text: 'É isso, vou vender meu carro' }
        },
        {
            tipo: 'img',
            nome: 'barked',
            post: 'https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?w=2000',
            curtiu: { nome: '9gag', quant: 20 },
            coment: { nome: '9gag', text: 'É isso, vou vender meu carro' }
        }
    ]


    return (
        <div className="posts_container">
            {lista.map((item) => {
                if(item.tipo == 'img'){
                    return <Post nome={item.nome} post={item.post} curtiu={item.curtiu} coment={item.coment} />
                }
                else{
                    return <PostVideo nome={item.nome} post={item.post} curtiu={item.curtiu} coment={item.coment} />
                }
            })}
            
        </div>
    )
}