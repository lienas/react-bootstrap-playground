import React, {useState} from 'react';
import Form from "react-bootstrap/Form";

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

    const [darkMode, setDarkMode] = useState(true);

    const handleChange = () => {
        console.log("change called !!" )
        toggleBodyClasses(!darkMode);
        setDarkMode((prevState => {
            return !prevState
        }));

    }

    return (
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Darkmode"
                onChange={handleChange}
            />
        </Form>
    );
};

export default DarkModeSwitcher;
