import PageTabs from "../ui/PageTabs";

export const profilTabs = [
  { label: { id: "SEJARAH", en: "HISTORY" }, path: "/profil/sejarah" },
  { label: { id: "VISI", en: "VISION" }, path: "/profil/visi-misi" },
  {
    label: { id: "TUJUAN PENDIDIKAN (PEO)", en: "EDUCATIONAL OBJECTIVES (PEO)" },
    path: "/profil/tujuan",
  },
  {
    label: { id: "STRUKTUR ORGANISASI", en: "ORGANISATIONAL STRUCTURE" },
    path: "/profil/struktur-organisasi",
  },
];

export default function ProfilTabs({
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
      tabs={profilTabs}
      ariaLabel="Profil Tabs"
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
