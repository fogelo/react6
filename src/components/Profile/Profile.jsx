import './Profile.module.css'
import classes from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import Profileinfo from "./Profileinfo/Profileinfo";
import { updateNewPostText } from "../../redux/store";
import MyPostContainer from "./MyPosts/MyPostContainer";



const Profile = (props) => {
    return (<div>
            <Profileinfo/>
            <MyPostContainer/>
        </div>

    )

}
export default Profile;
