import { Children, createContext, use, useContext, useEffect, useState } from "react";


export const AppContext = createContext()

export const AppContextProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    const [DarkMode, setDarkMode] = useState(()=>{
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(()=>{
        const Mode = DarkMode ? 'dark-mode' : 'light-mode';
        document.body.className = Mode
        localStorage.setItem('teme', DarkMode ? 'dark' : 'light');
    }, [DarkMode])

    const ContextValue = {
        user, setUser, DarkMode, setDarkMode
    }

    

    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)