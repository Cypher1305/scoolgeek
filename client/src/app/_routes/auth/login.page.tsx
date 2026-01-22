import { PageComponent } from 'rasengan';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useState } from 'react';

const Login: PageComponent = () => {
	const { t } = useTranslation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const changeLang = (lang: 'fr' | 'en') => {
		i18n.changeLanguage(lang);
		localStorage.setItem('lang', lang);
	};

	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: handle login
		console.log('login', { email, password });
	};

	return (
		<section className="relative w-full h-screen bg-[#5c677d] patterns flex flex-col justify-end font-urbanist">
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

			<div className="relative bg-white w-full h-[65%] px-8 pb-5 flex flex-col justify-between items-center">
				<div>
					<h1 className="text-4xl font-bold text-[#5c677d]">{t('signin')}</h1>
					<p className="text-gray-400 mt-4 leading-relaxed">{t('signin_message')}</p>
				</div>

				<form onSubmit={submit} className="w-full max-w-md mb-9">
					<div className="mb-4">
						<label className="sr-only">{t('email')}</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder={t('email')}
							className="w-full border-b border-gray-300 py-2 focus:outline-none"
						/>
					</div>

					<div className="mb-6">
						<label className="sr-only">{t('password')}</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder={t('password')}
							className="w-full border-b border-gray-300 py-2 focus:outline-none"
						/>
					</div>

					<button
						type="submit"
						className="w-full py-3 mb-6 rounded-xl bg-[#5c677d] text-white font-semibold shadow-md hover:opacity-95 transition-opacity"
					>
						{t('signin')}
					</button>

                    <p className="text-center text-gray-400">
                        {t('dont_have_account')}{' '}
                        <a href="/auth/register" className="text-[#090c9b] hover:underline">
                            {t('signup')}
                        </a>
                    </p>
				</form>
			</div>
		</section>
	);
};

Login.metadata = {
	title: "s'Cool KIT - Login",
	description: "Login page of s'Cool KIT application",
};

export default Login;

