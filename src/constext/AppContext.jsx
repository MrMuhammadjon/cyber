import { Children, createContext, use, useContext, useEffect, useState } from "react";


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [responsive, setResponsive] = useState(window.innerWidth <= 768);
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);


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

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const savedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setFavorites(savedFavs);
        setCart(savedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

        const handleFavoriteClick = (productId) => {
        setFavorites((prevFavs) =>
            prevFavs.includes(productId)
                ? prevFavs.filter((id) => id !== productId)
                : [...prevFavs, productId]
        );
    };

    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const exists = prevCart.find((item) => item.id === product.id);
            if (exists) return prevCart; 
            return [...prevCart, product];
        });
    };


    const ContextValue = {
        user, setUser, DarkMode, setDarkMode, showHeader, setShowHeader, responsive, setResponsive, favorites, setFavorites, cart, setCart, handleFavoriteClick, handleAddToCart
    }



    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)