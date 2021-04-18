import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import { updateNewPostText } from "./redux/store";


const App = (props) => {

    return (
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className="App-wrapper-content">
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                    <Route path='/dialogs' render={ () => <Dialogs store={props.store} />}/>
                    <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                                   dispatch={props.dispatch}/>}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' render={ () => <Music/>}/>
                    <Route path='/settings' render={ () => <Settings/>}/>
                </div>
            </div>

    );
}
export default App;
