import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { VitalMonitor } from '@/features/misc';

import { ShowDiagnosisResult } from '../components/ShowDiagnosisResult';
import { ShowProfileForm } from '../components/ShowProfileForm';
import { ShowSelectedSymptom } from '../components/ShowSelectedSymptom';

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

          <h1 className="mt-14 text-2xl font-semibold leading-none">Monitoring Tanda Vital</h1>

          <VitalMonitor />
        </div>

        <div>
          <h1 className="mt-14 text-2xl font-semibold leading-none">Daftar Gejala</h1>

          <div className="mt-8 lg:mt-14">
            <ShowSelectedSymptom />
          </div>
        </div>
      </div>

      <ShowDiagnosisResult />
    </div>
  );
};
