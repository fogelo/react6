import './Profile.module.css'
import classes from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import Profileinfo from "./Profileinfo/Profileinfo";



const Profile = () => {
    return (<div>
            <Profileinfo/>
            <MyPost/>
        </div>

    )

}
export default Profile;

