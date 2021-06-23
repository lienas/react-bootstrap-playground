//import DarkModeSwitcher from "./component/DarkModeSwitcher";
//import {useState} from "react";
//import StyleSwitcher from "./component/StyleSwitcher";
import "./app.scss";
import AppBar from "./component/AppBar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Book from "./component/Book";
import {Container} from "react-bootstrap";
import BookList from "./component/BookList";

function App() {

    // const [style, setStyle] = useState("styles/App.css");
    return (
        <Router>
            <div className="App">
                {/*{false ? <StandardTheme/> : <AlternativeTheme/>}*/}
                <AppBar/>
                <Switch>
                    <Route exact path='/'>
                        <Container>
                            <h1>Home</h1>
                            <Link to='/book/0'>Buch</Link>
                        </Container>
                    </Route>
                    <Route path='/books'>
                        <BookList/>
                    </Route>
                    <Route path='/book/:id'>
                        <Container>
                            <Book/>
                        </Container>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
