import  {useEffect, useMemo, useState} from 'react';
import {makeObservable} from "./makeObservable";

const darkModeStore = makeObservable({darkMode: true})

export const useDarkMode = () => {

    const [darkMode, setDarkMode] = useState(darkModeStore.get());

    useEffect(()=> {
        return darkModeStore.subscribe(setDarkMode);
    },[])

    const actions = useMemo(() => {
        return {
            switchDarkMode: (darkMode) => darkModeStore.set({darkMode: darkMode})
        }
    }, [])

    return {
        state: darkMode,
        actions
    };
};

