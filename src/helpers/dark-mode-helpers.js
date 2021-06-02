export const isDarkMode = () => {
    // if darkMode then body contains class bg-dark
    const bodyClasses = document.body.className;
    if (bodyClasses.includes('bg-dark')) {
        return true;
    }
    return false;

}
