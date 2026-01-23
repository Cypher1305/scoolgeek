import { PageComponent } from "rasengan";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import kit from "../../assets/kit.jpeg";
import stickers from "../../assets/stickers.jpeg";
import notebooks from "../../assets/notebooks.jpg";
import custom from "../../assets/custom.jpg";

const Index: PageComponent = () => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const rawSlides = t("heroSlides", { returnObjects: true });
  const slides: string[] = Array.isArray(rawSlides) ? rawSlides : [];

  // 🔹 Auto-slide (ne démarre que si slides existe)
  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white font-sans home-patterns">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center ">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                  {t("title")}
                </h1>
                <p className="text-xl text-gray-500 font-semibold italic">
                  {t("description")}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="font-bold text-gray-800">4.8</span>
                <span className="text-gray-500 text-sm">150+ Reviews</span>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-6 shadow-md max-w-xl">
                {slides.length > 0 ? (
                  <>
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed text-lg transition-opacity duration-700 ease-in-out animate-fade"
                    >
                      {slides[index]}
                    </p>

                    {/* Dots */}
                    <div className="flex gap-2 mt-4">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          className={`w-2.5 h-2.5 rounded-full transition ${
                            i === index ? "bg-green-500" : "bg-green-200"
                          }`}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400 italic">Loading...</p>
                )}
              </div>

              <div className="flex gap-4">
                {/* <button className="bg-gray-900 text-white text-xs px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
                    {t("orderBtn")}
                  </button> */}
                <button className="bg-white text-gray-900 text-xs px-8 py-3 rounded-full font-semibold border-2 border-gray-900 hover:bg-gray-50 transition">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://buy.yango.com/store/scoolkit"
                  >
                    {t("exploreBtn")}
                  </a>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={kit}
                  alt="Creative products"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full blur-2xl opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative w-full leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>

      {/* Products Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stickers Card */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative mb-4">
                <img
                  src={stickers}
                  alt="Stickers"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-md">
                  <p className="text-sm text-gray-600 ">{t("startingPrice")}</p>
                  <p className="text-2xl font-bold text-[#090c9b]">
                    {t("productStickersPrice")}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t("productStickersCurrency")}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 italic">
                {t("productStickersName")}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {t("productStickersDesc")}
              </p>

              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                <a target="_blank" rel="noopener noreferrer" href="https://buy.yango.com/store/scoolkit">
                {t("orderBtn")}</a>
              </button>
            </div>

            {/* Knitting Card */}
            <div className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative mb-4">
                <img
                  src={notebooks}
                  alt="Knitting"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-md">
                  <p className="text-sm text-gray-500">{t("startingPrice")}</p>
                  <p className="text-2xl font-bold text-orange-500">
                    {t("productKnittingPrice")}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t("productKnittingCurrency")}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 italic">
                {t("productKnittingName")}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.7</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {t("productKnittingDesc")}
              </p>

              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                <a target="_blank" rel="noopener noreferrer" href="https://buy.yango.com/store/scoolkit">
                {t("orderBtn")}</a>
              </button>
            </div>

            {/* Notebooks Card */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative mb-4">
                <img
                  src={custom}
                  alt="custom"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-md">
                  <p className="text-sm text-gray-500">{t("startingPrice")}</p>
                  <p className="text-2xl font-bold text-purple-500">
                    {t("productCustomPrice")}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t("productCustomCurrency")}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 italic">
                {t("productCustomName")}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.8</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {t("productCustomDesc")}
              </p>

              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/Ysvyrmh2PNZWCkma7">
                  {t("UploadBtn")}{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Index.metadata = {
  title: "Welcome to s'Cool KIT",
  description: "Welcome page of s'Cool KIT application",
};

export default Index;
