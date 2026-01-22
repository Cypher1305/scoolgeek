import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
          >
            <span>f</span>
          </a>
          {/* <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
              <span>P</span>
            </a>
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
              <span>T</span>
            </a> */}
          <a
            href="#"
            className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
          >
            <span>IG</span>
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#" className="text-gray-600 hover:text-blue-900 transition">
            {t("footerHome")}
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-900 transition">
            {t("footerAbout")}
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-900 transition">
            {t("footerShop")}
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-900 transition">
            {t("footerBlog")}
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-900 transition">
            {t("footerContact")}
          </a>
          {/* <a href="#" className="text-gray-600 hover:text-blue-900 transition">{t("footerPolicy")}</a> */}
        </nav>

        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} s'Cool KIT
          <br /> <FontAwesomeIcon icon={faCode} /> and{" "}
          <FontAwesomeIcon icon={faPalette} /> with ❤️ 
          by <strong>Cypher1305</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
