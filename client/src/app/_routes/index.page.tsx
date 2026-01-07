import { PageComponent } from 'rasengan';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


const Page: PageComponent = () => {
  const { t } = useTranslation();

  const changeLang = (lang: 'fr' | 'en') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };
  return (
    <section className="relative w-full h-screen bg-[#090c9b] patterns flex flex-col justify-end font-urbanist">
       <header className="flex justify-end items-center w-full">
         <div className="absolute top-4 right-6 flex gap-3">
          <button
            onClick={() => changeLang('fr')}
            className="text-sm font-semibold text-white hover:text-black"
          >
            FRANÇAIS 
          </button>
          <p className="text-md font-semibold text-white">|</p>
          <button
            onClick={() => changeLang('en')}
            className="text-sm font-semibold text-white hover:text-black"
          >
            ENGLISH
          </button>
        </div>
      </header> 

      <div className="relative w-full leading-[0] mb-[-1px]">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-auto"
          fill="#ffffff" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,202.7C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative bg-white w-full h-[40%] px-8 pb-5 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#090c9b]">
            {t('welcome')}
          </h1>
          <p className="text-gray-400 mt-4 leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="flex justify-end items-center gap-4">
            <span className="font-semibold text-gray-500">
              {t('continue')}
            </span>
            {/* <button className="bg-[#090c9b] p-4 rounded-full text-white shadow-lg hover:scale-105 transition-transform">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button> */}
          </div>
        </div> 
      </div>
    </section>
  );
};

Page.metadata = {
  title: 'Welcome to s\'Cool GEEK',
  description: 'Welcome page of s\'Cool GEEK application',
};

export default Page;
