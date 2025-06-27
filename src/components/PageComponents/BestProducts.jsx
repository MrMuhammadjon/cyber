import React, { use, useEffect } from 'react'
import { useAppContext } from '../../constext/AppContext';
import 'boxicons'
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';
import { fetchProducts } from '../../features/products/ProductsRender';

export const BestProducts = () => {

    const {
        user, setUser, DarkMode, setDarkMode, showHeader, setShowHeader, responsive, setResponsive, favorites, setFavorites, cart, setCart, handleFavoriteClick, handleAddToCart
    } = useAppContext()

    const dispatch = useDispatch()
    const { items, status } = useSelector(state => state.products)


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);


    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
        });
    }, []);


    if (status === 'loading') return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
                <div className="flex gap-2">
                    <div className="w-6 h-6 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-6 h-6 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-6 h-6 bg-white rounded-full animate-bounce"></div>
                </div>
            </div>
    );

    if (status === 'failed') return <p>Xatolik yuz berdi!</p>;

    const Best = items.slice(0, 10)


    console.log(items);



    return (
        <>
            <div className={`w-full flex justify-center py-10 pb-20 ${DarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="grid grid-cols-2 gap-3 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-5 w-[90%] max-w-[1400px]">
                    {Best.map((product) => {
                        const isFavorite = favorites.includes(product.id);
                        return (
                            <div
                                key={product.id}
                                className={`group rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${DarkMode ? 'bg-gray-700' : 'bg-white'}`}
                            >
                                <div className="overflow-hidden h-45 md:h-65 flex items-center justify-center">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.name}
                                        className="w-auto h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-4 space-y-2">
                                    <h3 className={`text-lg font-semibold line-clamp-2 ${DarkMode ? 'text-white' : 'text-gray-800'}`}>
                                        {product.title}
                                    </h3>
                                    <p className={`text-sm font-thin line-clamp-2 ${DarkMode ? 'text-white' : 'text-gray-800'}`}>{product.brand}</p>
                                    <div className="flex gap-5"><p className={`font-semibold line-clamp-2 ${DarkMode ? 'text-white' : 'text-gray-800'}`}>${product.discountPercentage}</p><p className='line-through'>${product.price}</p></div>
                                </div>

                                <div className="px-4 pb-4 flex items-center justify-between">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={`py-2 px-4 rounded-xl font-medium shadow hover:opacity-90 active:scale-95 transition-all duration-200 ${DarkMode ? 'border text-white border-white hover:bg-black  hover:border-black' : 'bg-black  hover:bg-white hover:text-black border text-white'}`}
                                    >
                                        Add to Cart
                                    </button>

                                    <button onClick={() => handleFavoriteClick(product.id)}>
                                        <box-icon
                                            name="heart"
                                            type={isFavorite ? 'solid' : 'regular'}
                                            color={isFavorite ? '#f87171' : '#9ca3af'}
                                            className="w-6 h-6 transition-colors duration-300"
                                        ></box-icon>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </>
    )
}
