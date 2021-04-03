import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPost = (props) => {

    let postsData = [
        {id: 1, message: 'It is my first post', likesCount: '10'},
        {id: 2, message: 'It is my second post', likesCount: '15'},
        {id: 3, message: 'It is my third post', likesCount: '8'},
        {id: 4, message: 'It is my fourth post?', likesCount: '3'},
        ]

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div><textarea></textarea></div>
            <div><button>Add post</button></div>
            <Post message={postsData[0].message} id={postsData[0].id} likesCount={postsData[0].likesCount}/>
            <Post message={postsData[1].message} id={postsData[1].id} likesCount={postsData[1].likesCount}/>
            <Post message={postsData[2].message} id={postsData[2].id} likesCount={postsData[2].likesCount}/>
            <Post message={postsData[3].message} id={postsData[3].id} likesCount={postsData[3].likesCount}/>
        </div>
    )
}
    export default MyPost;