import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Content/>


        </div>
    );
}
export default App;
