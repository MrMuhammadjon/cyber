import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons';
import { useAppContext } from '../../constext/AppContext';

const BowerByCategory = () => {
    const { showHeader, DarkMode, setDarkMode, responsive, setResponsive } = useAppContext();
    const navigate = useNavigate();

    const categories = [
        { id: 'phones', title: 'Phones', icon: 'mobile' },
        { id: 'smart-watches', title: 'Smart Watches', icon: 'stopwatch', type: 'solid' },
        { id: 'cameras', title: 'Cameras', icon: 'camera' },
        { id: 'headphones', title: 'Headphones', icon: 'headphone' },
        { id: 'computers', title: 'Computers', icon: 'laptop' },
        { id: 'gaming', title: 'Gaming', icon: 'game' },
    ];

    const handleCardClick = (id) => {
        navigate(`/category/${id}`);
    };

    return (
        <div className={`py-10  w-full flex items-center justify-center ${DarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="container mx-auto px-4 w-[90%] max-w-[1400px]">
                <div className="flex items-center justify-between mb-4">
                    <h2 className={`text-xl font-semibold ${DarkMode ? 'text-white' : 'text-black'}`}>Browse By Category</h2>
                </div>
                <div className="flex overflow-x-auto space-x-4">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            onClick={() => handleCardClick(cat.id)}
                            className={`min-w-[120px] cursor-pointer flex flex-col items-center p-4 rounded-lg transition
                                   ${DarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                        >
                            <box-icon
                                name={cat.icon}
                                color={DarkMode ? 'white' : 'black'}
                                class={`text-3xl mb-2 ${DarkMode ? 'text-white' : 'text-gray-700'}`}
                            ></box-icon>
                            <span className="text-sm font-medium">{cat.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BowerByCategory;
