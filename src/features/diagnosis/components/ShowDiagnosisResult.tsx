export const ShowDiagnosisResult = () => {
  return (
    <div className="md:flex md:justify-center">
      <div className="mt-14 font-semibold md:flex md:min-w-[400px] md:flex-col md:justify-center">
        <div>
          <h2>Diagnosa Penyakit</h2>
          <div className="mt-2 rounded-md bg-[#1939D2] py-4 text-center text-sm text-white">
            Tekanan Darah Tinggi (HIPERTENSI)
          </div>
        </div>
        <div className="mt-2">
          <h2>Tingkat Keparahan</h2>
          <div className="mt-2 rounded-md bg-[#1939D2] py-4 text-center text-sm text-white">
            Parah
          </div>
        </div>
      </div>
    </div>
  );
};
