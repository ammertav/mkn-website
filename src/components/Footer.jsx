import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="h-fit w-full bg-blue-900 mx-auto mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 xl:p-10 gap-8">
                    {/* Kolom 1: Logo & Info */}
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <span className="text-blue-900 text-xs font-bold">Logo</span>
                            </div>
                            <h2 className="text-white text-xl font-bold">Nama Universitas</h2>
                        </Link>
                        <p className="text-blue-100 text-sm">
                            Mencetak generasi unggul yang siap berinovasi dan berkontribusi untuk masyarakat dan bangsa.
                        </p>
                    </div>

                    {/* Kolom 2: Kontak */}
                    <div className='space-y-4'>
                        <h1 className='font-bold font-sans text-white text-lg'>Hubungi Kami</h1>
                        <div className='space-y-2'>
                            <p className='font-light text-blue-100 text-sm'>info@universitas.ac.id</p>
                            <p className='font-light text-blue-100 text-sm'>+62 123 4567 890</p>
                            <p className='font-light text-blue-100 text-sm'>
                                Jl. Pendidikan No. 1, Kota Pelajar, Provinsi Ilmu, 12345, Indonesia
                            </p>
                        </div>
                    </div>

                    {/* Kolom 3: Tautan Penting */}
                    <div className='space-y-4'>
                        <h1 className='font-bold font-sans text-white text-lg'>Tautan Penting</h1>
                        <div className='flex flex-col space-y-2'>
                            <Link to="/tentang" className="text-blue-100 text-sm hover:text-white hover:underline">Tentang Kami</Link>
                            <Link to="/fakultas" className="text-blue-100 text-sm hover:text-white hover:underline">Fakultas & Program Studi</Link>
                            <Link to="/pendaftaran" className="text-blue-100 text-sm hover:text-white hover:underline">Pendaftaran Mahasiswa Baru</Link>
                            <Link to="/berita" className="text-blue-100 text-sm hover:text-white hover:underline">Berita & Pengumuman</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-800 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className='text-center md:text-left'>
                        <h1 className='font-light text-blue-200 text-sm'>
                            Copyright © Nama Universitas {new Date().getFullYear()}
                        </h1>
                    </div>
                    <div className='flex gap-4 justify-center'>
                        <Link to='#' aria-label="Instagram">
                            <FaInstagram className='text-blue-200 hover:text-white w-6 h-6 transition-colors' />
                        </Link>
                        <Link to='#' aria-label="Facebook">
                            <FaFacebook className='text-blue-200 hover:text-white w-6 h-6 transition-colors' />
                        </Link>
                        <Link to='#' aria-label="Twitter">
                            <FaTwitter className='text-blue-200 hover:text-white w-6 h-6 transition-colors' />
                        </Link>
                        <Link to='#' aria-label="YouTube">
                            <FaYoutube className='text-blue-200 hover:text-white w-6 h-6 transition-colors' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
