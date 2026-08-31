import { Helmet } from "react-helmet-async";
import StudentLifeSection from "../../components/StudentLife/StudentLifeSection";
import { ukmData } from "../../data/ukmData";

const activities = ukmData.map((item) => ({
  id: item.id,
  title: item.title,
  description: item.description,
  image: item.image,
  linkText: "Pelajari Lebih Lanjut",
  linkHref: `/mahasiswa/ukm/${item.slug}`,
}));

export default function StudentActivities() {

  return (
    <>
      <Helmet>
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
