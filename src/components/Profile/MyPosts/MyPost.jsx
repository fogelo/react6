import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPost = () => {
    return (
        <div className={classes.MyPosts}>
            My posts
            <textarea></textarea>
            <button>Add post</button>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    )
}
    export default MyPost;