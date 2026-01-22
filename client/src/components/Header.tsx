import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useState } from 'react';

const Header = () => {
  useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  const changeLang = (lng: 'fr' | 'en') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
    setLang(lng);
  };

  return (
    <header className="flex justify-end p-4 z-10 bg-transparent w-full home-patterns gap-4">
      <div className="flex gap-2 bg-white rounded-full px-3 py-1 shadow-md">
        {(['fr', 'en'] as const).map((lng) => (
          <button
            key={lng}
            onClick={() => changeLang(lng)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
              lang === lng
                ? 'bg-gray-500 text-white'
                : 'text-gray-600 hover:text-pink-500'
            }`}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex gap-4 bg-white rounded-full px-3 py-1 shadow-md">
        <button className="text-gray-700 hover:text-blue-600" >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        </button>
        <button className="text-gray-700 hover:text-blue-600 relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        </button>
        </div>
    </header>
    
  );
};

export default Header;
