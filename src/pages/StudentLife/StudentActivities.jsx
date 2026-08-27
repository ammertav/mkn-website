import { Helmet } from "react-helmet-async";
import StudentLifeSection from "../../components/StudentLife/StudentLifeSection";

const activities = [
  {
    id: 1,
    title: "Unit Kegiatan Olahraga & Kebugaran",
    description:
      "Fasilitas dan perkumpulan olahraga bulu tangkis, futsal, tenis meja, dan yoga bagi mahasiswa magister untuk menjaga kebugaran fisik dan keseimbangan hidup di tengah rutinitas akademik yang intensif.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    linkText: "Jadwal Latihan & Info",
    linkHref: "#",
  },
  {
    id: 2,
    title: "Seni & Paduan Suara Mahasiswa Hukum",
    description:
      "Wadah ekspresi musikal dan kesenian tradisional-modern yang secara rutin mengisi acara resmi universitas, yudisium, serta festival kebudayaan antarperguruan tinggi.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    linkText: "Galeri & Rekrutmen",
    linkHref: "#",
  },
  {
    id: 3,
    title: "Komunitas Pecinta Alam Kenotariatan",
    description:
      "Kegiatan eksplorasi alam terbuka, pendakian, penanaman pohon mangrove, serta edukasi hukum lingkungan kepada masyarakat pesisir dan pedesaan.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
    linkText: "Agenda Ekspedisi",
    linkHref: "#",
  },
  {
    id: 4,
    title: "Kajian Islam & Majelis Taklim Magister",
    description:
      "Forum penguatan spiritualitas dan pemahaman hukum Islam kontemporer, menyelenggarakan pengajian rutin, kajian tafsir tematik, dan bakti sosial Ramadhan.",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    linkText: "Jadwal Kajian",
    linkHref: "#",
  },
];

export default function StudentActivities() {

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>Unit Kegiatan Mahasiswa (UKM) | MKn UNISSULA</title>
        <meta
          name="description"
          content="Komunitas minat dan bakat, olahraga, seni musik, pecinta alam, dan kajian keislaman mahasiswa MKn UNISSULA."
        />
      </Helmet>

      <StudentLifeSection
        title="Unit Kegiatan Mahasiswa (UKM)"
        description="Beragam komunitas minat dan bakat tersedia untuk mendukung pengembangan kepribadian, kreativitas, kebugaran, dan spiritualitas mahasiswa Program Magister Kenotariatan UNISSULA."
        items={activities}
      />
    </>
  );
}
