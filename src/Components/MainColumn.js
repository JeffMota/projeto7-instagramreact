import PostsContainer from "./PostsContainer"
import StoriesContainer from "./StoriesContainer"

export default function MainColumn() {
    return (
        <div className="coluna">
            <StoriesContainer />
            <PostsContainer />
        </div>
    )
}