import './Profile.module.css'
import classes from './Profile.module.css'

const Content = () => {
    return (<div className={classes.Content}>Main content
            <img
                src="https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fA%3D%3D&w=1000&q=80"
                alt="Фон"/>

            <div>ava+description</div>
            <div className={classes.Posts}>My posts
                <div className={classes.Item}>Post_1</div>
                <div className={classes.Item}>Post_2</div>
                <div className={classes.Item}>Post_3</div>
                <div className={classes.Item}>Post_4</div>
            </div>
        </div>
    )

}
export default Content;