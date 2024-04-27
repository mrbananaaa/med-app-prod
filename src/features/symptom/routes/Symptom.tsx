import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import { SymptomOptions } from '../components/SymptomOptions';

export const Symptom = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <Link to="/">
          <ChevronLeft className="absolute inset-x-0 inset-y-1/3" />
        </Link>
        <h1 className="max-w-[200px] text-center text-3xl font-semibold leading-none">
          Gejala Yang Anda Rasakan
        </h1>
      </div>

      <SymptomOptions />

      <div className="justify-center lg:flex">
        <Link to="/diagnosis">
          <Button className="text-md mt-16 w-full bg-[#1939D2] py-7 font-semibold hover:bg-[#112FBD] lg:w-fit lg:px-32">
            Diagnosa
          </Button>
        </Link>
      </div>
    </div>
  );
};
