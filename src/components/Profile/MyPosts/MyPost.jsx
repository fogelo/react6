import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPost = (props) => {


    // let postsElements = props.posts.map (p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>
    let postsElements = props.posts.map (p => <Post message={p.message}/>
)
    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div><textarea></textarea></div>
            <div><button>Add post</button></div>
            {/*<Post message={posts[0].message} id={posts[0].id} likesCount={posts[0].likesCount}/>*/}
            {/*<Post message={posts[1].message} id={posts[1].id} likesCount={posts[1].likesCount}/>*/}
            {/*<Post message={posts[2].message} id={posts[2].id} likesCount={posts[2].likesCount}/>*/}
            {/*<Post message={posts[3].message} id={posts[3].id} likesCount={posts[3].likesCount}/>*/}
            {postsElements}
        </div>
    )
}
    export default MyPost;