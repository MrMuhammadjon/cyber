import React from 'react'
import { useAppContext } from '../../constext/AppContext';

export const BestProducts = () => {

    const {
        user, setUser, DarkMode, setDarkMode, showHeader, setShowHeader, responsive, setResponsive, favorites, setFavorites, cart, setCart, handleFavoriteClick, handleAddToCart
    } = useAppContext()
    const products = [
        {
            id: 1,
            name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
            price: 900,
            image: 'https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/95/a4/95a4f305d5a62add1d6e8837d5502598/250331120244645935.webp', // Replace with actual image URL
        },
        {
            id: 2,
            name: 'Blackmagic Pocket Cinema Camera 6k',
            price: 2535,
            image: 'https://via.placeholder.com/200x200', // Replace with actual image URL
        },
        {
            id: 3,
            name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
            price: 399,
            image: 'https://brostore.uz/cdn/shop/files/4_9bf5f44d-5219-4bd0-a834-25eaf13a2670.png?v=1717165640', // Replace with actual image URL
        },
        {
            id: 4,
            image: 'https://www.dq-solutions.ch/XooWebKit/bin/imagecache.php/8958e_463d32da07/442b4_9SJg3/Apple-AirPods-Max-Kopfhoerer-Polarstern-03.jpg',
            price: 549,
            nema: 'https://via.placeholder.com/200x200', // Replace with actual image URL
        },
        {
            id: 5,
            image: 'https://kattabozor.fra1.cdn.digitaloceanspaces.com/domain_offer_thumbnails/157bea0c307911f098680242c0a8111d.jpg',
            price: 369,
            name: 'https://via.placeholder.com/200x200', // Replace with actual image URL
        },
        {
            id: 6,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsdf1YCecu3vJAm-Jjo0TdxX05my1E-bt6Q&s',
            price: 1799,
            name: 'https://via.placeholder.com/200x200', // Replace with actual image URL
        },
        {
            id: 7,
            name: 'Galaxy Buds FE Graphite',
            price: 99.99,
            image: 'https://via.placeholder.com/200x200', // Replace with actual image URL
        },
        {
            id: 8,
            name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
            price: 398,
            image: 'https://via.placeholder.com/200x200', // Replace with actual image URL
        },
    ];
    return (
        <div className='w-[100%] flex items-center justify-center'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-[90%]">
                {products.map((product) => {
                    const isFavorite = favorites.includes(product.id);
                    return (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
                            <div>
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600">${product.price}</p>
                                </div>
                            </div>
                            <div className="p-4 flex items-center justify-between">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
                                >
                                    Buy Now
                                </button>
                                <button onClick={() => handleFavoriteClick(product.id)}>
                                    <box-icon className={`text-xl transition-colors duration-300 ${isFavorite ? 'text-red-500' : 'text-gray-600'}`}>But</box-icon>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
