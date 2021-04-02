import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPost = () => {
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div><textarea></textarea></div>
            <div><button>Add post</button></div>
            <Post Message='How are you?'/>
            <Post Message='It is my first post'/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    )
}
    export default MyPost;