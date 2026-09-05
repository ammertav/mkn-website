function Maintenance() {
  return (
    <body className="bg-gradient-to-b from-red-600 to-orange-200 min-h-screen grid grid-cols-1">
      <div className="my-auto text-center px-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-white">503</h1>

            <h1 className="text-2xl font-semibold text-white">
              Layanan Sementara Tidak Tersedia
            </h1>

            <p className="text-white max-w-md mx-auto">
              Saat ini layanan sedang tidak dapat diakses. Silakan coba
              kembali beberapa saat lagi.
            </p>
          </div>

          <div className="pt-2">
            <div className="p-2 bg-red-600 rounded-md w-fit mx-auto">
              <span className="text-lg font-normal text-white px-4">
                Silakan coba kembali nanti
              </span>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Maintenance;