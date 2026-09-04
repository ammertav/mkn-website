import FacilitySectionHeader from "./FacilitySectionHeader";

/**
 * Isi sementara untuk halaman fasilitas yang datanya belum tersedia.
 *
 * Judul dan pengantar tetap ditampilkan supaya halaman punya konteks dan
 * tidak terbaca sebagai galat, sementara kotak bergaris putus-putus menandai
 * dengan jujur bahwa isinya memang belum ada — bukan gagal dimuat.
 *
 * Pengantar sengaja ditulis sebagai rencana ("akan memuat…"), bukan sebagai
 * pernyataan tentang fasilitasnya, supaya tidak ada keterangan yang belum
 * terverifikasi ikut tayang.
 */
export default function FacilityPlaceholder({ category, title, description }) {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section>
        <FacilitySectionHeader
          category={category}
          title={title}
          paragraphs={[description]}
        />
      </section>

      <section className="p-12 sm:p-16 lg:p-20 text-center border border-dashed border-gray-300 rounded-sm bg-gray-50/60">
        <p className="text-sm sm:text-base font-medium text-gray-500">
          Konten dan dokumentasi fasilitas ini akan segera ditambahkan.
        </p>
      </section>
    </div>
  );
}
