import PostsContainer from "./PostsContainer"
import StoriesContainer from "./stories-container"

export default function MainColumn() {
    return (
        <div className="coluna">
            <StoriesContainer />
            <PostsContainer />
        </div>
    )
}