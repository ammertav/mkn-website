import PageTabs from "../ui/PageTabs";

export const profilTabs = [
  { label: "SEJARAH", path: "/profil/sejarah" },
  { label: "VISI", path: "/profil/visi-misi" },
  { label: "TUJUAN PENDIDIKAN (PEO)", path: "/profil/tujuan" },
  { label: "STRUKTUR ORGANISASI", path: "/profil/struktur-organisasi" },
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
