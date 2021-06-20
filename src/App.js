//import DarkModeSwitcher from "./component/DarkModeSwitcher";
//import {useState} from "react";
//import StyleSwitcher from "./component/StyleSwitcher";
import "./app.scss";
import AppBar from "./component/AppBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Book from "./component/Book";
import {Container} from "react-bootstrap";

function App() {

    // const [style, setStyle] = useState("styles/App.css");
    return (
        <Router>
            <div className="App">
                {/*{false ? <StandardTheme/> : <AlternativeTheme/>}*/}
                <AppBar/>
                <Switch>
                    <Route exact path='/'>
                        <Container><h1>Home</h1></Container>
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
