import PageTabs from "../ui/PageTabs";

export const fasilitasTabs = [
  { label: { id: "RUANG KELAS", en: "CLASSROOMS" }, path: "/fasilitas/ruang-kelas" },
  { label: { id: "RUANG SEMINAR", en: "SEMINAR ROOMS" }, path: "/fasilitas/ruang-seminar" },
  {
    label: { id: "LABORATORIUM AKTA", en: "DEED LABORATORY" },
    path: "/fasilitas/laboratorium-akta",
  },
  {
    label: {
      id: "LABORATORIUM MANAJEMEN KANTOR",
      en: "OFFICE MANAGEMENT LABORATORY",
    },
    path: "/fasilitas/laboratorium-manajemen-kantor",
  },
  {
    label: { id: "PUSAT RISET MAHASISWA", en: "STUDENT RESEARCH CENTER" },
    path: "/fasilitas/student-research-center",
  },
  {
    label: { id: "PODCAST KENOTARIATAN", en: "NOTARY PODCAST" },
    path: "/fasilitas/podcast-kenotarian",
  },
  { label: { id: "PERPUSTAKAAN", en: "LIBRARY" }, path: "/fasilitas/perpustakaan" },

];

export default function FasilitasTabs({
  className = "",
  containerClassName = "",
  navClassName = "",
  tabClassName = "",
  activeTabClassName = "",
  inactiveTabClassName = "",
  ...props
}) {
  return (
    <PageTabs
      tabs={fasilitasTabs}
      ariaLabel="Fasilitas Tabs"
      className={className}
      containerClassName={containerClassName}
      navClassName={navClassName}
      tabClassName={tabClassName}
      activeTabClassName={activeTabClassName}
      inactiveTabClassName={inactiveTabClassName}
      {...props}
    />
  );
}
