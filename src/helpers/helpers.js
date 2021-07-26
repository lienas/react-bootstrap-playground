import PropTypes from 'prop-types';

/***
 * scroll to the first element with the given tagname
 * @param props
 * (tag = name of the tag, id = id of the element which calls the function)
 */
export const scrollPage = (props) => {
    const {tag, id} = props;
    const currentElement = document.getElementById(id);

    let currentSection = currentElement;
    // get parent DIV for part
    do {
        currentSection = currentSection.parentNode
    } while (!currentSection.attributes.hasOwnProperty('data-portal-component-type') && currentSection.nodeName !== 'BODY')

    console.log('section->',currentSection);

    //get the siblings of currentSection
    if (currentSection.nodeName !== 'BODY') {
        do {
            currentSection = currentSection.nextElementSibling
            console.log('sibling ->',currentSection);
            console.log('currentSection.attributes ->',currentSection && currentSection.attributes);
            console.log('currentSection.firstChild.nodeName ->',currentSection && currentSection.firstChild.nodeName);
        } while (
            currentSection && currentSection.attributes &&
            (!currentSection.attributes.hasOwnProperty('data-portal-component-type')
                && !currentSection.firstChild.nodeName === tag.toUpperCase())
            )
    }

    //get the sibling into view, if there is one
    if (currentSection) {
        currentSection.scrollIntoView();
    }
}

scrollPage.propTypes = {
    tag: PropTypes.string.isRequired
}
