import './App.scss';
import {Alert, Button, Card, Container} from "react-bootstrap";
import DarkModeSwitcher from "./component/DarkModeSwitcher";
import Navigation from "./component/Navigation";
import {useDarkMode} from "./helpers/useDarkMode";

function App() {

    const {state} = useDarkMode();
    console.log(useDarkMode());
    console.log("darkmode from app", state.darkMode);
    const cardStyle = state.darkMode ? "my-4 bg-dark" : "my-4 bg-light";

    console.log("cardStyle ", cardStyle);

    return (
        <div className="App">
            <Navigation/>
            <Container>
                <DarkModeSwitcher/>
                <h1>Hello World</h1>
                <p className='p-1'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, facere sapiente! Ab aperiam
                    assumenda cum debitis dolores ducimus eaque hic itaque labore laboriosam libero nisi perspiciatis,
                    quas,
                    quasi reiciendis repudiandae similique tenetur. Blanditiis eveniet obcaecati ullam veniam vero. A
                    asperiores at blanditiis dicta dolorem doloremque ducimus est et ex expedita labore, maiores minima
                    nam
                    necessitatibus nobis pariatur praesentium quae quisquam sunt suscipit totam veniam vitae voluptatum.
                    A
                    adipisci excepturi impedit neque nihil! Accusamus, aliquam fugit labore magnam modi molestiae nobis,
                    optio perferendis, praesentium quo reprehenderit soluta tempore temporibus ullam vel? Asperiores,
                    blanditiis totam? Dolor excepturi necessitatibus nisi quis, ratione vel.</p>
                <Alert variant='info'>Das sind die ersten Gehversuche mit dem Framework</Alert>
                <h2>cards</h2>

                <Card style={{ width: '18rem' }} className= {cardStyle}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-danger">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Button variant="outline-primary" >Test-Button</Button>

            </Container>
        </div>
    );
}

export default App;
