import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown, FiUser } from "react-icons/fi";
import { facultyData } from "../../data/facultyData";
import Img from "../../components/ui/Img";

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
                                <Link
                                    key={faculty.id}
                                    to={`/staff/dosen/${faculty.slug || faculty.id}`}
                                    className="bg-white border border-gray-200 rounded-xs overflow-hidden flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-200 group cursor-pointer"
                                >
                                    {/* Grayscale Portrait Photo / Placeholder */}
                                    <div className="w-full aspect-4/5 bg-gray-100 overflow-hidden relative flex items-center justify-center">
                                        {faculty.image ? (
                                            <Img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="w-full h-full object-cover object-top contrast-105 group-hover:scale-103 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-400 group-hover:bg-gray-100 transition-colors p-4 text-center">
                                                <FiUser className="text-5xl text-gray-300 mb-2" />
                                                <span className="text-[11px] uppercase tracking-wider font-medium text-gray-400">
                                                    Foto Belum Tersedia
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Details */}
                                    <div className="p-5 text-center flex flex-col grow justify-between">
                                        <div className="space-y-1.5">
                                            <h3 className="font-heading font-bold text-base sm:text-lg text-primary leading-tight group-hover:text-primary/90 transition-colors">
                                                {faculty.name}
                                            </h3>
                                            <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                                                {faculty.title}
                                            </p>
                                        </div>

                                        <p className="text-xs sm:text-sm text-body leading-relaxed mt-4 line-clamp-3">
                                            {faculty.bio}
                                        </p>
                                    </div>
                                </Link>
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
                                onClick={() => setVisibleCount(filteredFaculty.length)}
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
