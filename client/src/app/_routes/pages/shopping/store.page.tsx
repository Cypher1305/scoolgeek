import { PageComponent } from 'rasengan';
import { useTranslation } from 'react-i18next';
import kit from '../../../../assets/kit.jpeg';
import { useState } from 'react';


const Store: PageComponent = () => {
const { t } = useTranslation();
const [quantity, setQuantity] = useState(1);


return (
<div className="min-h-screen bg-white font-sans">
    {/* Wave Divider */}
    <div className="relative w-full leading-[0] home-patterns">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z">
            </path>
        </svg>
    </div>

    {/* Products Section */}
    <section className="bg-white py-2 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className='text-xl font-semibold mb-6'>{t("bestSellers")}</h2>
            <h3 className='font-semibold text-gray-500'>{t("offers")}</h3>
            <h4 className='text-gray-500'>{t("bestSellersDesc")}</h4>

            <div className="flex gap-6 overflow-x-auto  py-4">
                <div className="min-w-[280px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={kit} alt="Creative products" className="w-full h-48 object-cover rounded-2xl mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 italic mb-2">
                        produit
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        description du produit
                    </p>
                    {/* QUANTITÉ */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <button onClick={()=> setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 rounded-full bg-gray-200 font-bold"
                                >
                                −
                            </button>

                            <span className="font-semibold">{quantity}</span>

                            <button onClick={()=> setQuantity(quantity + 1)}
                                className="w-8 h-8 rounded-full bg-gray-200 font-bold"
                                >
                                +
                            </button>
                        </div>
                    </div>
                    {/* AJOUT PANIER */}
                    <button
                        className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                        {t("orderBtn")}
                    </button>
                </div>
            
                <div className="min-w-[280px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={kit} alt="Creative products" className="w-full h-48 object-cover rounded-2xl mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 italic mb-2">
                        produit
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        description du produit
                    </p>
                    {/* QUANTITÉ */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <button onClick={()=> setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 rounded-full bg-gray-200 font-bold"
                                >
                                −
                            </button>

                            <span className="font-semibold">{quantity}</span>

                            <button onClick={()=> setQuantity(quantity + 1)}
                                className="w-8 h-8 rounded-full bg-gray-200 font-bold"
                                >
                                +
                            </button>
                        </div>
                    </div>
                    {/* AJOUT PANIER */}
                    <button
                        className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                        {t("orderBtn")}
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className='text-xl font-semibold mb-6'>{t("newArrivals")}</h2>
            <h3 className='font-semibold text-gray-500'>{t("offers")}</h3> 


            <div className="flex flex-wrap gap-6 overflow-x-auto scrollbar-hide py-4">
                <div className="min-w-[280px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img src={kit} alt="Creative products" className="w-full h-48 object-cover rounded-2xl mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 italic mb-2">
                        produit
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        description du produit
                    </p>
                    {/* QUANTITÉ */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <button onClick={()=> setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 rounded-full bg-gray-200 font-bold"
                                >
                                −
                            </button>

                            <span className="font-semibold">{quantity}</span>

                            <button onClick={()=> setQuantity(quantity + 1)}
                                className="w-8 h-8 rounded-full bg-gray-200 font-bold"
                                >
                                +
                            </button>
                        </div>
                    </div>
                    {/* AJOUT PANIER */}
                    <button
                        className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                        {t("orderBtn")}
                    </button>
                </div>
            </div>
             <div className="flex justify-center mt-8">
                <button className="bg-gray-900 text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition">{t("viewMoreBtn")}</button>
            </div>
         </div>
         
    </section>

    <section className="py-16 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className='text-xl font-semibold mb-6'>{t("newArrivals")}</h2>
         </div>
    </section>

</div>

);
};

Store.metadata = {
title: 'Welcome to s\'Cool KIT',
description: 'Welcome page of s\'Cool KIT application',
};

export default Store;
