import './Navbar.module.css'
import classes from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Item}><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
            <div className={classes.Item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink></div>
            <div className={classes.Item}><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></div>
            <div className={classes.Item}><NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink></div>
            <div className={classes.Item}><NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink></div>
        </div>

    )
}
export default Navbar;
