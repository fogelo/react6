import './Profile.module.css'
import classes from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import Profileinfo from "./Profileinfo/Profileinfo";
import { updateNewPostText } from "../../redux/store";



const Profile = (props) => {
    return (<div>
            <Profileinfo/>
            <MyPost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>

    )

}
export default Profile;

