import './Header.module.css'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.Header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png"
                alt="apple"/>
        </header>
    )
}
export default Header;
