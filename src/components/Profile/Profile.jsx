import './Profile.module.css'
import classes from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import Profileinfo from "./Profileinfo/Profileinfo";



const Profile = (props) => {
    return (<div>
            <Profileinfo/>
            <MyPost posts={props.state.posts}/>
        </div>

    )

}
export default Profile;

