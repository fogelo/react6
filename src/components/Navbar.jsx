import './Navbar.module.css'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Item}><a href=""></a></div>
            <div className={classes.Item}>Messages</div>
            <div className={classes.Item}>News</div>
            <div className={classes.Item}>Music</div>
            <div className={classes.Item}>Settings</div>
        </div>

    )
}
export default Navbar;
