import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));

// Profil sub-pages
const ProfilLayout = lazy(() => import("./pages/Profil/index"));
const Sejarah = lazy(() => import("./pages/Profil/Sejarah"));
const VisiMisi = lazy(() => import("./pages/Profil/VisiMisi"));
const Tujuan = lazy(() => import("./pages/Profil/Tujuan"));
const StrukturOrganisasi = lazy(() => import("./pages/Profil/StrukturOrganisasi"));

// Berita sub-pages
const BeritaIndex = lazy(() => import("./pages/Berita/index"));
const BeritaDetail = lazy(() => import("./pages/Berita/BeritaDetail"));

const AkademikLayout = lazy(() => import("./pages/Akademik/index"));
const Kurikulum = lazy(() => import("./pages/Akademik/Kurikulum"));
const ProfilLulusan = lazy(() => import("./pages/Akademik/ProfilLulusan"));
const CapaianPembelajaran = lazy(() => import("./pages/Akademik/CapaianPembelajaran"));
const Panduan = lazy(() => import("./pages/Akademik/Panduan"));
const PanduanEvaluasi = lazy(() => import("./pages/Akademik/PanduanEvaluasi"));
const Asesmen = lazy(() => import("./pages/Akademik/Asesmen"));
const PanduanUjian = lazy(() => import("./pages/Akademik/PanduanUjian"));
const UtsUas = lazy(() => import("./pages/Akademik/UtsUas"));
const Magang = lazy(() => import("./pages/Akademik/Magang"));
const Tesis = lazy(() => import("./pages/Akademik/Tesis"));
const Kalender = lazy(() => import("./pages/Akademik/Kalender"));

// Download page
const Download = lazy(() => import("./pages/Download/index"));

// Informasi / Penerimaan sub-pages
const InformasiLayout = lazy(() => import("./pages/Penerimaan/index"));
const StudentAdmission = lazy(() => import("./pages/Penerimaan/StudentAdmission"));
const GraduationRate = lazy(() => import("./pages/Penerimaan/GraduationRate"));
const LecturerResearch = lazy(() => import("./pages/Penerimaan/LecturerResearch"));
const CommunityService = lazy(() => import("./pages/Penerimaan/CommunityService"));

// Staff sub-pages
const StaffLayout = lazy(() => import("./pages/Staff/index"));
const Tendik = lazy(() => import("./pages/Staff/Tendik"));
const FacultyDirectory = lazy(() => import("./pages/Staff/FacultyDirectory"));
const FacultyDetail = lazy(() => import("./pages/Staff/FacultyDetail"));

// Fasilitas sub-pages
const FasilitasLayout = lazy(() => import("./pages/Fasilitas/index"));
const RuangKelas = lazy(() => import("./pages/Fasilitas/RuangKelas"));
const Laboratorium = lazy(() => import("./pages/Fasilitas/Laboratorium"));
const ResearchCenter = lazy(() => import("./pages/Fasilitas/ResearchCenter"));
const Perpustakaan = lazy(() => import("./pages/Fasilitas/Perpustakaan"));

// Quality Assurance Unit sub-pages
const QualityAssuranceLayout = lazy(() => import("./pages/QualityAssurance/index"));
const QualityAssuranceOverview = lazy(() => import("./pages/QualityAssurance/QualityAssuranceOverview"));
const QaDocuments = lazy(() => import("./pages/QualityAssurance/QaDocuments"));
const QaPolicy = lazy(() => import("./pages/QualityAssurance/QaPolicy"));
const QaManualStandard = lazy(() => import("./pages/QualityAssurance/QaManualStandard"));
const QaStandar = lazy(() => import("./pages/QualityAssurance/QaStandar"));
const QaForms = lazy(() => import("./pages/QualityAssurance/QaForms"));
const InternalAuditReport = lazy(() => import("./pages/QualityAssurance/InternalAuditReport"));
const LearningTeachingReport = lazy(() => import("./pages/QualityAssurance/LearningTeachingReport"));
const StudentSurveyReport = lazy(() => import("./pages/QualityAssurance/StudentSurveyReport"));
const AlumniSurveyReport = lazy(() => import("./pages/QualityAssurance/AlumniSurveyReport"));

// Mahasiswa sub-pages
const MahasiswaLayout = lazy(() => import("./pages/StudentLife/index"));
const StudentActivities = lazy(() => import("./pages/StudentLife/StudentActivities"));
const Accommodation = lazy(() => import("./pages/StudentLife/Accommodation"));
const StudentOrganizationDetail = lazy(() => import("./pages/StudentLife/StudentOrganizationDetail"));
const UKMDetail = lazy(() => import("./pages/StudentLife/UKMDetail"));

// Alumni & Karir sub-pages
const AlumniLayout = lazy(() => import("./pages/Alumni/index"));
const TracerStudy = lazy(() => import("./pages/Alumni/TracerStudy"));
const CareerCenter = lazy(() => import("./pages/Alumni/CareerCenter"));
const JobVacancies = lazy(() => import("./pages/Alumni/JobVacancies"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
        <Route path="/" element={<Home />} />

        {/* Profil — nested routes */}
        <Route path="/profil" element={<ProfilLayout />}>
          <Route index element={<Navigate to="sejarah" replace />} />
          <Route path="sejarah" element={<Sejarah />} />
          <Route path="sejarah-latar-belakang" element={<Navigate to="/profil/sejarah" replace />} />
          <Route path="visi-misi" element={<VisiMisi />} />
          <Route path="tujuan" element={<Tujuan />} />
          <Route path="struktur-organisasi" element={<StrukturOrganisasi />} />
        </Route>

        {/* Berita — catalog & detail routes */}
        <Route path="/berita" element={<BeritaIndex />} />
        <Route path="/berita/:slug" element={<BeritaDetail />} />

        {/* Akademik — nested routes */}
        <Route path="/akademik" element={<AkademikLayout />}>
          <Route index element={<Navigate to="profil-lulusan" replace />} />
          <Route path="profil-lulusan" element={<ProfilLulusan />} />
          <Route path="capaian-pembelajaran" element={<CapaianPembelajaran />} />
          <Route path="kurikulum" element={<Navigate to="reguler" replace />} />
          <Route path="kurikulum/reguler" element={<Kurikulum />} />
          <Route path="kurikulum/internasional" element={<Kurikulum />} />
          <Route path="kurikulum/*" element={<Navigate to="reguler" replace />} />
          <Route path="panduan-akademik" element={<Panduan />} />
          <Route path="panduan-evaluasi" element={<PanduanEvaluasi />} />
          <Route path="asesmen" element={<Asesmen />} />
          <Route path="panduan-ujian" element={<PanduanUjian />}>
            <Route index element={<Navigate to="uts-uas" replace />} />
            <Route path="uts-uas" element={<UtsUas />} />
            <Route path="magang" element={<Magang />} />
            <Route path="tesis" element={<Tesis />} />
            {/* Alias lama: istilah diubah dari Skripsi ke Tesis */}
            <Route path="skripsi" element={<Navigate to="../tesis" replace />} />
          </Route>
          <Route path="kalender" element={<Kalender />} />
        </Route>

        {/* Informasi — nested routes */}
        <Route path="/informasi" element={<InformasiLayout />}>
          <Route index element={<Navigate to="penerimaan-mahasiswa" replace />} />
          <Route path="penerimaan-mahasiswa" element={<StudentAdmission />} />
          <Route path="tingkat-kelulusan" element={<GraduationRate />} />
          <Route path="penelitian-dosen" element={<LecturerResearch />} />
          <Route path="pengabdian-dosen" element={<CommunityService />} />
        </Route>
        {/* Legacy redirect */}
        <Route path="/penerimaan" element={<Navigate to="/informasi/penerimaan-mahasiswa" replace />} />
        <Route path="/penerimaan/*" element={<Navigate to="/informasi" replace />} />

        {/* Staff — nested routes */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<Navigate to="dosen" replace />} />
          <Route path="dosen" element={<FacultyDirectory />} />
          <Route path="dosen/:slug" element={<FacultyDetail />} />
          <Route path="tendik" element={<Tendik />} />
          <Route path="faculty-directory" element={<FacultyDirectory />} />
          <Route path="faculty-directory/:slug" element={<FacultyDetail />} />
        </Route>

        {/* Download route */}
        <Route path="/download" element={<Download />} />

        {/* Fasilitas — nested routes */}
        <Route path="/fasilitas" element={<FasilitasLayout />}>
          <Route index element={<Navigate to="ruang-kelas" replace />} />
          <Route path="ruang-kelas" element={<RuangKelas />} />
          <Route path="laboratorium" element={<Laboratorium />} />
          <Route path="student-research-center" element={<ResearchCenter />} />
          <Route path="perpustakaan" element={<Perpustakaan />} />
        </Route>

        {/* Quality Assurance Unit — nested routes */}
        <Route path="/quality-assurance" element={<QualityAssuranceLayout />}>
          <Route index element={<QualityAssuranceOverview />} />
          <Route path="qa-documents" element={<Navigate to="/quality-assurance/qa-documents/qa-policy" replace />} />
          <Route path="qa-documents/qa-policy" element={<QaPolicy />} />
          <Route path="qa-documents/qa-manual-standard" element={<QaManualStandard />} />
          <Route path="qa-documents/qa-standar" element={<QaStandar />} />
          <Route path="qa-documents/qa-forms" element={<QaForms />} />
          <Route path="internal-audit-report" element={<InternalAuditReport />} />
          <Route path="learning-teaching-report" element={<LearningTeachingReport />} />
          <Route path="student-survey-report" element={<StudentSurveyReport />} />
          <Route path="alumni-survey-report" element={<AlumniSurveyReport />} />
        </Route>

        {/* Organisasi Mahasiswa — Standalone page langsung tanpa sidebar (organisasi hanya 1) */}
        <Route path="/mahasiswa/organisasi" element={<StudentOrganizationDetail />} />
        <Route path="/mahasiswa/organisasi/*" element={<Navigate to="/mahasiswa/organisasi" replace />} />

        {/* Mahasiswa — nested routes (UKM & Akomodasi) */}
        <Route path="/mahasiswa" element={<MahasiswaLayout />}>
          <Route index element={<Navigate to="/mahasiswa/organisasi" replace />} />
          <Route path="organisasi" element={<Navigate to="/mahasiswa/organisasi" replace />} />
          <Route path="ukm" element={<StudentActivities />} />
          <Route path="akomodasi" element={<Accommodation />} />
        </Route>
        <Route path="/mahasiswa/ukm/:slug" element={<UKMDetail />} />


        {/* Alumni & Karir — nested routes */}
        <Route path="/alumni" element={<AlumniLayout />}>
          <Route index element={<Navigate to="tracer-study" replace />} />
          <Route path="tracer-study" element={<TracerStudy />} />
          <Route path="pusat-karir" element={<CareerCenter />} />
          <Route path="lowongan" element={<JobVacancies />} />
        </Route>
        {/* Direct / Legacy Aliases */}
        <Route path="/sejarah" element={<Navigate to="/profil/sejarah" replace />} />
        <Route path="/visi-misi" element={<Navigate to="/profil/visi-misi" replace />} />
        <Route path="/tujuan" element={<Navigate to="/profil/tujuan" replace />} />
        <Route path="/struktur-organisasi" element={<Navigate to="/profil/struktur-organisasi" replace />} />
        <Route path="/kurikulum" element={<Navigate to="/akademik/kurikulum/reguler" replace />} />
        <Route path="/kurikulum/*" element={<Navigate to="/akademik/kurikulum/reguler" replace />} />
        <Route path="/organisasi-mahasiswa" element={<Navigate to="/mahasiswa/organisasi" replace />} />
        <Route path="/unit-kegiatan-mahasiswa" element={<Navigate to="/mahasiswa/ukm" replace />} />
        <Route path="/dosen" element={<Navigate to="/staff/dosen" replace />} />
        <Route path="/tenaga-kependidikan" element={<Navigate to="/staff/tendik" replace />} />
        <Route path="/pusat-karir" element={<Navigate to="/alumni/pusat-karir" replace />} />
        <Route path="/qa-documents" element={<Navigate to="/quality-assurance/qa-documents" replace />} />
        <Route path="/qa-documents/*" element={<Navigate to="/quality-assurance/qa-documents" replace />} />
        <Route path="/alumni-karir" element={<Navigate to="/alumni" replace />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Suspense>
    </>
  );
}
