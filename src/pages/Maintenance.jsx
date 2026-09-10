import { Helmet } from "react-helmet-async";
import { useT, useLanguage } from "../i18n/languageContext";

function Maintenance() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === "en"
            ? "Service Unavailable (503) | MKn UNISSULA"
            : "Layanan Sementara Tidak Tersedia (503) | MKn UNISSULA"}
        </title>
        <meta
          name="description"
          content={
            lang === "en"
              ? "The service is temporarily unavailable. Please try again shortly."
              : "Saat ini layanan sedang tidak dapat diakses. Silakan coba kembali beberapa saat lagi."
          }
        />
      </Helmet>

      <div className="bg-gradient-to-b from-red-600 to-orange-200 min-h-screen grid grid-cols-1">
        <div className="my-auto text-center px-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-white">503</h1>

              <h2 className="text-2xl font-semibold text-white">
                {t({
                  id: "Layanan Sementara Tidak Tersedia",
                  en: "Service Temporarily Unavailable",
                })}
              </h2>

              <p className="text-white max-w-md mx-auto">
                {t({
                  id: "Saat ini layanan sedang tidak dapat diakses. Silakan coba kembali beberapa saat lagi.",
                  en: "This service is temporarily unavailable. Please check back again shortly.",
                })}
              </p>
            </div>

            <div className="pt-2">
              <div className="p-2 bg-red-600 rounded-md w-fit mx-auto">
                <span className="text-lg font-normal text-white px-4">
                  {t({
                    id: "Silakan coba kembali nanti",
                    en: "Please try again later",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maintenance;