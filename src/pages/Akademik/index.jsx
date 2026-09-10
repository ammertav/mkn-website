import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/ui/Breadcrumb";
import SidebarNav from "../../components/ui/SidebarNav";
import { useT } from "../../i18n/languageContext";

/** Narahubung akademik dan PMB, dikelompokkan agar terbaca rapi di sidebar. */
const akademikContact = {
  title: {
    id: "KONTAK AKADEMIK",
    en: "ACADEMIC CONTACT",
  },
  groups: [
    {
      items: [
        { name: "Suma’in, S.Pd.", phone: "+62 823-1222-8282" },
        { name: "Ikrom, S.H., M.H.", phone: "+62 823-1222-8181" },
      ],
    },
  ],
};

const metaAkademik = {
  title: {
    id: "Akademik | MKn UNISSULA",
    en: "Academic | MKn UNISSULA",
  },
  description: {
    id: "Informasi Akademik, Kurikulum, Profil Lulusan, Panduan, dan Kalender Akademik Magister Kenotariatan (MKn) UNISSULA.",
    en: "Academic Information, Curriculum, Graduate Profiles, Guidelines, and Academic Calendar of Master of Notarial Law (MKn) UNISSULA.",
  },
};

export default function AkademikLayout() {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>{t(metaAkademik.title)}</title>
        <meta
          name="description"
          content={t(metaAkademik.description)}
        />
      </Helmet>

      <main className="flex flex-col min-h-screen bg-banner font-body text-body">
        <Navbar />

        <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb berada di paling atas, membentang di atas 2 kolom */}
          <Breadcrumb />

          {/* 2-Column Grid Layout: Judul Sidebar & Judul Konten Sejajar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:self-stretch">
              <SidebarNav
                contact={akademikContact}
              />
            </aside>

            {/* Konten dari child route */}
            <section className="lg:col-span-8 xl:col-span-9">
              <Outlet />
            </section>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
