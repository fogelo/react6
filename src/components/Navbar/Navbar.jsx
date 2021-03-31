import './Navbar.module.css'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Item}><a href="/profile">Profile</a></div>
            <div className={classes.Item}><a href="/dialogs">Messages</a></div>
            <div className={classes.Item}><a href="/news">News</a></div>
            <div className={classes.Item}><a href="/music">Music</a></div>
            <div className={classes.Item}><a href="/settings">Settings</a></div>
        </div>

    )
}
export default Navbar;
