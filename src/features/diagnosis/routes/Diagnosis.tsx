import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { VitalMonitor } from '@/features/misc';

import { ShowProfileForm } from '../components/ShowProfileForm';

export const Diagnosis = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <Link to="/symptom">
          <ChevronLeft className="absolute inset-x-0 inset-y-1/3" />
        </Link>
        <h1 className="max-w-[250px] text-center text-3xl font-semibold leading-none">
          Hasil Diagnosa Anda
        </h1>
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-8">
        <div>
          <h1 className="mt-14 text-3xl font-semibold">Identitas Diri</h1>

          <ShowProfileForm />
        </div>

        <div>
          <h1 className="mt-14 text-2xl font-semibold leading-none">Monitoring Tanda Vital</h1>

          <div className="lg:mt-14">
            <VitalMonitor />
          </div>
        </div>
      </div>

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
              Kronis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
