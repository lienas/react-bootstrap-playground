//import DarkModeSwitcher from "./component/DarkModeSwitcher";
//import {useState} from "react";
//import StyleSwitcher from "./component/StyleSwitcher";
import "./app.scss";
import AppBar from "./component/AppBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Book from "./component/Book";
import {Container} from "react-bootstrap";
import BookList from "./component/BookList";
import Home from "./component/Home";
import BackToTop from "./component/BackToTop";

function App() {

    // const [style, setStyle] = useState("styles/App.css");
    return (
        <Router>
            <div className="App">
                {/*{false ? <StandardTheme/> : <AlternativeTheme/>}*/}
                <AppBar/>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                        <BackToTop/>
                    </Route>
                    <Route path='/books'>
                        <BookList/>
                    </Route>
                    <Route path='/book/:id'>
                        <Container className='position-relative'>
                            <Book/>
                        </Container>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
