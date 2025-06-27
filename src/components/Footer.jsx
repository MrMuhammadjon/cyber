import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../constext/AppContext';

const Footer = () => {
  const { DarkMode } = useAppContext();

  const footerData = [
    {
      title: 'Company',
      links: [
        { label: 'Home', to: '/' },
        { label: 'About us', to: '/about' },
        { label: 'Contact us', to: '/contact' },
        { label: 'Privacy policy', to: '/privacy' },
      ],
    },
    {
      title: 'Get in touch',
      contacts: [
        { type: 'phone', value: '+1-234-567-890' },
        { type: 'email', value: 'contact@example.com' },
      ],
    },
  ];

  return (
    <div className={`flex items-center justify-center w-full ${DarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'}`}>
      <footer
        className={`px-6 pt-8 w-[90%] max-w-[1400px] m-auto mt-10 ${DarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
          }`}
      >
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b pb-10 border-gray-500">
          {/* Logo va description */}
          <div className="md:max-w-96">
            <h1 className='text-6xl font-bold'>
              Cyber
            </h1>
            <p className="mt-6 text-sm">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                alt="google play"
                className="h-10 w-auto border border-white rounded"
              />
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                alt="app store"
                className="h-10 w-auto border border-white rounded"
              />
            </div>
          </div>

          {/* Dynamic bloklar */}
          <div className="flex-1 flex flex-wrap items-start md:justify-end gap-20 md:gap-40">
            {footerData.map((section, index) => (
              <div key={index}>
                <h2 className="font-semibold mb-5">{section.title}</h2>
                {/* Agar links bor bo‘lsa */}
                {section.links && (
                  <ul className="text-sm space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.to}
                          className={`hover:underline ${DarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {/* Agar contactlar bor bo‘lsa */}
                {section.contacts && (
                  <div className="text-sm space-y-2">
                    {section.contacts.map((item, i) => (
                      <p key={i}>{item.value}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="pt-4 text-center text-sm pb-5">
          Copyright {new Date().getFullYear()} © PreBuiltUI. All Right Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
