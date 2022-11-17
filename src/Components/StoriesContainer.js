import Story from "./Story";

export default function StoriesContainer() {
    const lista = ['9gag', 'barked', 'filomoderna', 'memeriagourmet', 'meowed', 'nathanwpylestrangeplanet', 'respondeai',]

    return (
        <div className="stories_container">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            {lista.map((item) => <Story nome={item}/>)}
        </div>
    )
}