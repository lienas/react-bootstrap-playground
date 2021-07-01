//import DarkModeSwitcher from "./component/DarkModeSwitcher";
//import {useState} from "react";
//import StyleSwitcher from "./component/StyleSwitcher";
import "./app.scss";
import AppBar from "./component/AppBar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Book from "./component/Book";
import {Container} from "react-bootstrap";
import BookList from "./component/BookList";
import VideoBanner from "./component/VideoBanner";

function App() {

    // const [style, setStyle] = useState("styles/App.css");
    return (
        <Router>
            <div className="App">
                {/*{false ? <StandardTheme/> : <AlternativeTheme/>}*/}
                <AppBar/>
                <Switch>
                    <Route exact path='/'>
                        <VideoBanner src='/media/MSM.mp4' image='/media/ReliquieHeadline.png'/>
                        <Container>
                            <h1>Home</h1>
                            <Link to='/book/0'>Buch</Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate distinctio esse
                                nobis quo. Adipisci aliquam asperiores culpa delectus dolorem doloribus illum ipsa,
                                magnam magni modi neque nihil nostrum provident, quod repellendus tempora vero! Ab
                                architecto asperiores at cumque dolor dolore eius expedita, facilis illo in, iste minima
                                numquam perferendis quam quibusdam, quis rerum tenetur voluptas voluptatibus voluptatum!
                                Debitis dolore excepturi nisi quaerat quibusdam similique, sint temporibus veritatis
                                vero? Architecto, consectetur earum excepturi facere facilis harum non officia quaerat
                                qui veritatis vitae, voluptate. Culpa, dolores ea expedita quaerat qui quidem quis vero
                                voluptatibus? Architecto aut consequatur cupiditate debitis dignissimos, dolorem enim
                                est fugit in inventore libero nam non omnis porro possimus quis quo recusandae
                                reiciendis similique suscipit, unde ut voluptatibus! Accusamus adipisci eaque esse eum,
                                fuga harum laboriosam nostrum odio quas quibusdam reprehenderit, sapiente ullam ut!
                                Accusamus accusantium consequatur cum dolor dolore dolores doloribus esse, excepturi
                                exercitationem fuga fugit maxime nam natus neque nobis nostrum numquam obcaecati officia
                                provident quae, quaerat quia quisquam rem sequi sit suscipit tempore, tenetur vel
                                voluptas voluptate! Accusamus doloribus ducimus hic ipsam laboriosam natus non odio
                                omnis sit vitae! A accusamus atque cum dolorem est fuga hic illo in incidunt inventore
                                ipsam iure iusto laudantium, molestiae molestias nihil non nostrum possimus quaerat quos
                                reiciendis repellendus sapiente sequi tenetur vel velit veritatis voluptates! Ab
                                accusantium adipisci aliquam aliquid animi, asperiores atque aut autem beatae blanditiis
                                consequatur culpa cum cumque cupiditate dicta dolores dolorum excepturi fuga harum
                                impedit inventore ipsam iusto magni non nulla numquam odio provident quas qui ratione
                                repellat rerum sunt suscipit tempora tempore totam voluptatum. Ab aperiam asperiores at
                                commodi cupiditate dolore eaque, eveniet in iusto molestiae nam natus obcaecati optio
                                perspiciatis quam sed similique sint tempora totam voluptas? Alias delectus doloremque,
                                ea eaque esse et hic impedit laudantium, minus obcaecati, porro quo. Ad aliquid
                                architecto beatae consequatur eaque enim error eveniet facilis fuga fugit illum
                                inventore ipsum iste iusto laborum magnam minima nam nobis nostrum numquam officia porro
                                praesentium quas quidem quis, recusandae reiciendis repellendus rerum saepe sequi
                                similique soluta tenetur voluptatibus. Accusamus autem dolores, excepturi id in maxime
                                optio qui quia quidem, repellendus sit suscipit totam ut! Adipisci alias aspernatur
                                consequatur consequuntur cum deleniti dolore dolores eos eveniet exercitationem fugiat
                                hic in inventore iste magnam maiores modi mollitia neque, odio quas, quibusdam
                                recusandae sequi suscipit vel vitae voluptate voluptatibus? Adipisci aliquam animi
                                aperiam aspernatur assumenda blanditiis consectetur consequatur consequuntur distinctio
                                dolorem dolores doloribus eius enim esse exercitationem fugiat inventore, ipsam magnam,
                                minima nemo nobis nostrum nulla odio omnis pariatur placeat, porro quasi quibusdam quo
                                quod ratione rem sint sunt suscipit temporibus ullam voluptatibus. Autem cupiditate ex
                                fugit iusto laborum non officiis perferendis quia veniam voluptatem. Alias aliquid animi
                                deleniti doloremque dolorum enim, exercitationem magni nam, perferendis porro possimus
                                quas quia quibusdam? A accusamus animi aperiam architecto aspernatur at blanditiis
                                consectetur cumque cupiditate delectus et ex fugit hic illo inventore ipsum magnam
                                molestias nam necessitatibus nihil numquam omnis optio perspiciatis placeat quae quam
                                quasi qui quisquam quo sed, sunt suscipit tenetur totam ullam velit?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ipsum molestias nam
                                nisi qui quibusdam tempora. Ab amet beatae cum distinctio dolorem dolores dolorum eos
                                esse fugit harum hic labore laboriosam nam provident qui, quibusdam sit suscipit
                                temporibus ut voluptatum. Ab accusantium assumenda at consequuntur cum dolorum, earum
                                enim explicabo id ipsum iste libero molestias nam neque nihil odit officiis omnis
                                praesentium quae quas quibusdam rem reprehenderit repudiandae sed sit tempore
                                temporibus, tenetur. Aperiam ducimus eius eveniet nesciunt porro sapiente sint veritatis
                                voluptas. Accusantium amet atque blanditiis consequatur corporis dolorem, dolores
                                eligendi facere, facilis harum illum in, inventore labore nam officiis provident quaerat
                                qui quis quo recusandae repellendus repudiandae saepe soluta suscipit velit veritatis
                                vitae voluptatem! A distinctio doloremque earum enim eum harum illo in iusto laboriosam
                                maiores nostrum omnis optio quam qui rem repellat, similique velit veniam, voluptatem
                                voluptatibus. Aperiam consequatur dicta eveniet ipsam modi quisquam tempora vero!
                                Assumenda corporis dolores earum, et itaque magni natus nesciunt nobis perspiciatis quo
                                quos sed. Dolorem earum hic ipsum laboriosam magnam nam praesentium quos velit. Alias
                                animi asperiores aspernatur consectetur deserunt dicta eligendi fugiat fugit id impedit
                                incidunt itaque labore molestiae obcaecati perspiciatis porro quas quibusdam quos,
                                recusandae reiciendis rem repellendus sequi, similique totam ullam vel vero vitae.
                                Dolores, eaque illo illum inventore ipsa natus nulla ratione sed similique! Ab hic
                                soluta veritatis! Beatae cupiditate eos ex ipsa ipsum, iure necessitatibus tenetur
                                velit? Aliquid amet aspernatur atque consectetur consequatur delectus dolorum eius esse
                                explicabo facere impedit iste iure labore magnam maiores, maxime minus nesciunt
                                obcaecati porro quae quas quibusdam quo saepe sunt, tempore veritatis voluptas. Autem
                                cumque expedita, iusto magni nobis porro quis sit! Animi at in iusto libero quae
                                reiciendis voluptatem. Aut laudantium minima molestias, neque quod sunt tenetur. Ab amet
                                atque beatae blanditiis consectetur consequatur consequuntur dicta distinctio doloremque
                                doloribus enim et eum illum iste iure magnam maiores molestiae neque nobis quaerat, qui
                                quibusdam quos repudiandae saepe soluta suscipit temporibus vel veniam vero voluptatem!
                                Ad aliquam nesciunt praesentium repudiandae sapiente sed soluta. Asperiores doloribus
                                esse ipsa laboriosam, magni maiores quaerat soluta temporibus totam. Aspernatur beatae
                                consequuntur deleniti deserunt dolor et exercitationem fugiat illo perferendis, quaerat
                                quidem rem vero voluptatibus. Accusantium ad autem commodi cupiditate dolores esse est
                                fugiat illum ipsa laudantium, maiores provident quaerat ratione reprehenderit sint
                                suscipit voluptatem, voluptates. Accusamus alias autem, ducimus ea eius eligendi
                                exercitationem facilis fuga incidunt itaque magni molestias, neque obcaecati repellat
                                sapiente vel voluptatibus?</p>
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
