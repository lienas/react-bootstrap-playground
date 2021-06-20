import Form from "react-bootstrap/Form";
import {useDarkMode} from "../helpers/useDarkMode";

const toggleBodyClasses = isDarkMode => {
    if (isDarkMode) {
        // here's a good place to add a dark-mode css classes to our <body> and remove light mode
        document.body.classList.add('bg-dark', 'text-light');
        document.body.classList.remove('bg-light', 'text-dark');
    } else {
        // remove the dark mode classes, add light mode
        document.body.classList.add('bg-light', 'text-dark');
        document.body.classList.remove('bg-dark', 'text-light');
    }
}

const setHeader = (path) => {
    const head = document.head;
    const link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = path;

    head.appendChild(link);

    return () => { head.removeChild(link); }
}

const StyleSwitcher = (props) => {

    const {mode, setMode} = props;
    const status = mode !== "styles/App.css"
    const handleChange = () => {
        if (status) {
            setMode("styles/App.css");
            setHeader("styles/App.css")
        } else {
            setMode("styles/App2.css")
            setHeader("styles/App2.css")
        }
    }

    return (
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Style"
                onChange={handleChange}
                checked={status}
            />
        </Form>
    );
};

export default StyleSwitcher;
