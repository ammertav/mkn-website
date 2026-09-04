import PageTabs from "../ui/PageTabs";

export const fasilitasTabs = [
  { label: "RUANG KELAS", path: "/fasilitas/ruang-kelas" },
  { label: "LABORATORIUM AKTA", path: "/fasilitas/laboratorium-akta" },
  {
    label: "LABORATORIUM MANAJEMEN KANTOR",
    path: "/fasilitas/laboratorium-manajemen-kantor",
  },
  { label: "STUDENT RESEARCH CENTER", path: "/fasilitas/student-research-center" },
  { label: "PERPUSTAKAAN", path: "/fasilitas/perpustakaan" },
  { label: "MOOT COURT", path: "/fasilitas/moot-court" },
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
