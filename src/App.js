import './App.scss';
import {Alert, Container} from "react-bootstrap";
import DarkModeSwitcher from "./component/DarkModeSwitcher";
import Navigation from "./component/Navigation";

function App() {
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

            </Container>
        </div>
    );
}

export default App;
