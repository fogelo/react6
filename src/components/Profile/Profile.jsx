import './Profile.module.css'
import classes from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import Profileinfo from "./Profileinfo/Profileinfo";
import { updateNewPostText } from "../../redux/state";



const Profile = (props) => {
    return (<div>
            <Profileinfo/>
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>
        </div>

    )

}
export default Profile;

