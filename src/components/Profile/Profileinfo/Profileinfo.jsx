import classes from './Profileinfo.module.css'


const Profileinfo = () => {
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fA%3D%3D&w=1000&q=80"
                alt="Фон"/>
            <div className={classes.descriptionBlock}>ava+description</div>
        </div>

    )

}
export default Profileinfo;

