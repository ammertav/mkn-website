import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const facultyData = [
    {
        id: 1,
        name: "Prof. Dr. H. Ahmad Fauzan",
        title: "Guru Besar Hukum Agraria",
        expertise: "Hukum Agraria",
        type: "Guru Besar",
        bio: "Pakar dalam penyelesaian sengketa tanah dan regulasi pendaftaran tanah di Indonesia.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        name: "Dr. Siti Aminah",
        title: "Hukum Perusahaan",
        expertise: "Hukum Perusahaan",
        type: "Dosen Tetap",
        bio: "Fokus pada hukum kepailitan, tata kelola perusahaan yang baik, dan akuisisi.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        name: "Dr. Budi Santoso",
        title: "Hukum Perikatan",
        expertise: "Hukum Perikatan",
        type: "Dosen Tetap",
        bio: "Spesialisasi dalam penyusunan kontrak dan hukum jaminan fidusia.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        name: "Prof. Dr. Sri Wiyanti",
        title: "Hukum Keluarga & Waris",
        expertise: "Hukum Keluarga & Waris",
        type: "Guru Besar",
        bio: "Ahli dalam hukum kewarisan perdata barat dan hukum keluarga Islam.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 5,
        name: "Dr. Hendro Prasetyo, S.H., M.Kn.",
        title: "Dosen Praktisi / Notaris & PPAT",
        expertise: "Hukum Kenotariatan",
        type: "Dosen Praktisi",
        bio: "Praktisi senior dengan pengalaman 20+ tahun dalam perancangan akta perbankan syariah.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 6,
        name: "Dr. Nurul Hidayati, S.H., M.H.",
        title: "Hukum Pasar Modal & Siber",
        expertise: "Hukum Bisnis & Pasar Modal",
        type: "Dosen Tetap",
        bio: "Peneliti transaksi elektronik, cyber law, dan perlindungan data pribadi konsumen.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        name: "Prof. Dr. Gunarto, S.H., M.Hum.",
        title: "Guru Besar Filsafat Hukum",
        expertise: "Filsafat & Teori Hukum",
        type: "Guru Besar",
        bio: "Mendalami rekonstruksi hukum berbasis nilai keadilan Islam dan kemaslahatan umat.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 8,
        name: "Dr. Rahmat Hidayat, S.H., M.Kn.",
        title: "Hukum Pajak & BPHTB",
        expertise: "Hukum Pajak Kenotariatan",
        type: "Dosen Tetap",
        bio: "Fokus kajian kewajiban perpajakan dalam transaksi peralihan hak atas tanah dan bangunan.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    },
];

export default function FacultyDirectory() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedExpertise, setSelectedExpertise] = useState("Semua Keahlian");
    const [selectedType, setSelectedType] = useState("Semua Tipe");
    const [visibleCount, setVisibleCount] = useState(4);

    // Active filter state triggered by "Terapkan Filter"
    const [appliedFilters, setAppliedFilters] = useState({
        search: "",
        expertise: "Semua Keahlian",
        type: "Semua Tipe",
    });

    const handleApplyFilter = () => {
        setAppliedFilters({
            search: searchQuery,
            expertise: selectedExpertise,
            type: selectedType,
        });
        setVisibleCount(4);
    };

    const filteredFaculty = useMemo(() => {
        return facultyData.filter((item) => {
            const matchSearch =
                item.name.toLowerCase().includes(appliedFilters.search.toLowerCase()) ||
                item.title.toLowerCase().includes(appliedFilters.search.toLowerCase()) ||
                item.bio.toLowerCase().includes(appliedFilters.search.toLowerCase());

            const matchExpertise =
                appliedFilters.expertise === "Semua Keahlian" ||
                item.expertise === appliedFilters.expertise;

            const matchType =
                appliedFilters.type === "Semua Tipe" || item.type === appliedFilters.type;

            return matchSearch && matchExpertise && matchType;
        });
    }, [appliedFilters]);

    const displayedFaculty = filteredFaculty.slice(0, visibleCount);

    return (
        <>
            <Helmet>
                <html lang="id" />
                <title>Faculty & Research | MKn UNISSULA</title>
                <meta
                    name="description"
                    content="Jelajahi keahlian dan kontribusi penelitian dari staf pengajar Program Studi Magister Kenotariatan UNISSULA."
                />
            </Helmet>

            <div className="w-full font-body text-body">
                {/* Hero Title Section */}
                <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8">
                    <span className="text-xs font-semibold tracking-widest text-primary uppercase block mb-2">
                        DIREKTORI AKADEMIK
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-heading font-normal tracking-tight">
                        Faculty & Research
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-special leading-relaxed max-w-3xl">
                        Jelajahi keahlian dan kontribusi penelitian dari staf pengajar kami yang merupakan pakar
                        terkemuka di bidang ilmu kenotariatan dan hukum, berkomitmen pada keunggulan akademis dan
                        integritas profesional.
                    </p>
                </div>

                {/* Filter & Search Bar Section */}
                <div className="w-full border-y border-gray-200 bg-white">
                    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">

                            {/* Search by Name */}
                            <div className="lg:col-span-4 space-y-1.5">
                                <label className="text-xs sm:text-xs font-medium text-gray-500 block">
                                    Pencarian
                                </label>
                                <div className="relative flex items-center">
                                    <FiSearch className="absolute left-3 text-gray-400 text-sm" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleApplyFilter()}
                                        placeholder="Cari nama dosen..."
                                        className="w-full bg-[#fbfbfb] border border-gray-200 rounded-sm pl-9 pr-3 py-2 text-xs sm:text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            {/* Filter: Area Keahlian */}
                            <div className="lg:col-span-3 space-y-1.5">
                                <label className="text-xs sm:text-xs font-medium text-gray-500 block">
                                    Area Keahlian
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedExpertise}
                                        onChange={(e) => setSelectedExpertise(e.target.value)}
                                        className="w-full appearance-none bg-[#fbfbfb] border border-gray-200 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-heading focus:outline-none focus:border-primary/50 focus:bg-white transition-all cursor-pointer"
                                    >
                                        <option value="Semua Keahlian">Semua Keahlian</option>
                                        <option value="Hukum Agraria">Hukum Agraria</option>
                                        <option value="Hukum Perusahaan">Hukum Perusahaan</option>
                                        <option value="Hukum Perikatan">Hukum Perikatan</option>
                                        <option value="Hukum Keluarga & Waris">Hukum Keluarga & Waris</option>
                                        <option value="Hukum Kenotariatan">Hukum Kenotariatan</option>
                                        <option value="Hukum Bisnis & Pasar Modal">Hukum Bisnis & Pasar Modal</option>
                                        <option value="Filsafat & Teori Hukum">Filsafat & Teori Hukum</option>
                                        <option value="Hukum Pajak Kenotariatan">Hukum Pajak Kenotariatan</option>
                                    </select>
                                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-sm" />
                                </div>
                            </div>

                            {/* Filter: Tipe Pengajar */}
                            <div className="lg:col-span-3 space-y-1.5">
                                <label className="text-[11px] sm:text-xs font-medium text-gray-500 block">
                                    Tipe Pengajar
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedType}
                                        onChange={(e) => setSelectedType(e.target.value)}
                                        className="w-full appearance-none bg-[#fbfbfb] border border-gray-200 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-heading focus:outline-none focus:border-primary/50 focus:bg-white transition-all cursor-pointer"
                                    >
                                        <option value="Semua Tipe">Semua Tipe</option>
                                        <option value="Guru Besar">Guru Besar</option>
                                        <option value="Dosen Tetap">Dosen Tetap</option>
                                        <option value="Dosen Praktisi">Dosen Praktisi / Notaris</option>
                                    </select>
                                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-sm" />
                                </div>
                            </div>

                            {/* Submit Filter Button */}
                            <div className="lg:col-span-2">
                                <button
                                    onClick={handleApplyFilter}
                                    className="w-full bg-btn hover:opacity-90 text-white text-xs sm:text-[13px] font-semibold py-2.5 px-4 rounded-sm transition-opacity cursor-pointer text-center"
                                >
                                    Terapkan Filter
                                </button>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Faculty Grid Cards */}
                <div className="w-full flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {displayedFaculty.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {displayedFaculty.map((faculty) => (
                                <div
                                    key={faculty.id}
                                    className="bg-white border border-gray-200 rounded-xs overflow-hidden flex flex-col hover:border-gray-300 transition-all duration-200 shadow-2xs"
                                >
                                    {/* Grayscale Portrait Photo */}
                                    <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full object-cover object-top grayscale contrast-110"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Card Details */}
                                    <div className="p-5 text-center flex flex-col flex-grow justify-between">
                                        <div className="space-y-1.5">
                                            <h3 className="font-heading font-bold text-[17px] text-primary leading-tight">
                                                {faculty.name}
                                            </h3>
                                            <p className="text-[11.5px] uppercase tracking-wider text-gray-500 font-medium">
                                                {faculty.title}
                                            </p>
                                        </div>

                                        <p className="text-[12.5px] text-body leading-relaxed mt-4">
                                            {faculty.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-body">
                            <p className="text-base font-medium">Tidak ada dosen yang sesuai dengan kriteria filter.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedExpertise("Semua Keahlian");
                                    setSelectedType("Semua Tipe");
                                    setAppliedFilters({
                                        search: "",
                                        expertise: "Semua Keahlian",
                                        type: "Semua Tipe",
                                    });
                                }}
                                className="mt-3 text-xs text-primary font-semibold underline cursor-pointer"
                            >
                                Reset Filter
                            </button>
                        </div>
                    )}

                    {/* Load More Button */}
                    {visibleCount < filteredFaculty.length && (
                        <div className="flex justify-center mt-12">
                            <button
                                onClick={() => setVisibleCount((prev) => prev + 4)}
                                className="bg-white border border-gray-300 text-heading hover:bg-gray-50 hover:border-gray-400 text-xs font-medium py-2.5 px-8 rounded-sm shadow-2xs transition-all duration-150 cursor-pointer"
                            >
                                Muat Lebih Banyak
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
