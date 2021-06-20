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

const DarkModeSwitcher = () => {

    const {state, actions} = useDarkMode();

    console.log(state.darkMode);

    const handleChange = () => {
        console.log("change called !!" )
        toggleBodyClasses(!state.darkMode);
        actions.switchDarkMode(!state.darkMode);
    }

    return (
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Darkmode"
                onChange={handleChange}
                checked={state.darkMode}
            />
        </Form>
    );
};

export default DarkModeSwitcher;
