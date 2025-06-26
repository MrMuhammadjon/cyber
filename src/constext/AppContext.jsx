import { Children, createContext, use, useContext, useEffect, useState } from "react";


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [responsive, setResponsive] = useState(window.innerWidth <= 768);


    const [DarkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(() => {
        const Mode = DarkMode ? 'dark-mode' : 'light-mode';
        document.body.className = Mode
        localStorage.setItem('theme', DarkMode ? 'dark' : 'light');
    }, [DarkMode])


    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => window.removeEventListener("scroll", controlNavbar);
        }
    }, [lastScrollY]);


    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Dastlab bir marta tekshirib olish uchun chaqiramiz
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const ContextValue = {
        user, setUser, DarkMode, setDarkMode, showHeader, setShowHeader, responsive, setResponsive
    }



    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)