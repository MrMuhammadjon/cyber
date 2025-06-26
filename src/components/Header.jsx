import React, { useState } from 'react';
import 'boxicons';
import { useAppContext } from '../constext/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { showHeader, DarkMode, setDarkMode, responsive, setResponsive } = useAppContext();

  const headElements = [
    { title: 'Home', id: 1, Link: '/' },
    { title: 'About', id: 2, Link: '/about' },
    { title: 'Contact Us', id: 3, Link: '/contact' },
    { title: 'Blog', id: 4, Link: '/blog' },
  ];

  const headElementsIcons = [
    { icon: 'heart', id: 1, Link: '/wishes' },
    { icon: 'cart', id: 2, Link: '/basket' },
    { icon: 'user', id: 3, Link: '/profil' },
  ];

  const MobileHead = [
    { icon: 'home', id: 0, Link: '/' },
    { icon: 'heart', id: 1, Link: '/wishes' },
    { icon: 'cart', id: 2, Link: '/basket' },
    { icon: 'search', id: 3, Link: '/catalog' },
    { icon: 'user', id: 4, Link: '/profil' },
  ]


  return (
    <>
      {
        responsive ? (
          <header>
            <div className={`py-3 px-2 ${DarkMode ? 'bg-gray-800': 'bg-white'}`}>
              <h1 className={`${DarkMode ? 'text-white' : 'text-black'}`}>Cyber</h1>
            </div>

            <div className={`fixed bottom-0 left-0 w-full shadow-md py-3 flex justify-around md:hidden z-50 border-t-1 ${DarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              {MobileHead.map((item) => (
                <Link
                  key={item.id}
                  to={item.Link}
                  className={`flex flex-col items-center gap-1 text-sm transition duration-300`}
                >
                  <box-icon name={item.icon} size="m" color={`${DarkMode ? 'white' : 'black'}`} className={`transform transition duration-300 hover:-translate-y-1`}></box-icon>
                </Link>
              ))}
            </div>

          </header>) :
          (
            <header
              className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 shadow-md ${DarkMode ? 'bg-gray-800' : 'bg-white'
                } ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
            >
              <div className="max-w-[1400px] w-[90%] mx-auto px-4 py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex flex-1 items-center justify-start w-full md:w-auto">
                  <h1 className={`text-xl font-bold ${DarkMode ? 'text-white' : 'text-black'}`}>Cyber</h1>
                  <form className="hidden md:block ml-4 w-[80%]">
                    <div className={`h-full w-[100%] flex items-center justify-center gap-1.5 p-1 rounded-sm px-3 ${DarkMode ? 'bg-white' : 'bg-gray-300'}`}>
                      <box-icon name='search' color="gray"></box-icon>
                      <input
                        type="search"
                        placeholder="Search..."
                        className="py-1 w-[100%] rounded-md outline-none"
                      />
                    </div>
                  </form>
                </div>

                <div className="flex flex-[1.5] xl:flex-[1] flex-col md:flex-row md:items-center gap-4 h-full w-full md:w-auto justify-end items-center">
                  <ul className="flex gap-6 flex-wrap justify-center">
                    {headElements.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.Link}
                          className={`font-medium transition-[1.3s] ${DarkMode
                            ? 'text-white hover:text-yellow-400'
                            : 'text-black hover:text-blue-600'
                            }`}
                        >
                          {item.title}
                        </Link>

                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 justify-center">
                    {headElementsIcons.map((item) => (
                      <Link key={item.id} to={item.Link}>
                        <box-icon
                          name={item.icon}
                          color={DarkMode ? 'white' : 'black'}
                          class={`transform transition-[0.3s] hover:-translate-y-1 ${DarkMode ? 'hover:text-yellow-400' : 'hover:text-blue-600'}`}
                        ></box-icon>
                      </Link>
                    ))}
                    <div className='flex items-center justify-center'>
                      <button className='flex items-center justify-center h-full ' onClick={() => setDarkMode(!DarkMode)}>
                        {DarkMode ? (<box-icon name="sun" color="#fff" className='hover:rotate-90 transition-[0.3s]' size='30px'></box-icon>) : (<box-icon name="moon" className='hover:rotate-280 transition-[0.3s]' size='30px'></box-icon>)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>)
      }
    </>
  );
};

export default Header;
