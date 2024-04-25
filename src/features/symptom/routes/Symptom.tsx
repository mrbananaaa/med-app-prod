import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DATA_GEJALA } from '@/test/symptom-data';

const SymptomOptions = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {Object.entries(DATA_GEJALA).map(([id, name]) => (
          <div key={id} className="flex">
            <Input className="peer hidden" type="checkbox" id={id} />
            <label
              className="text-md flex w-full cursor-pointer select-none items-center justify-center rounded-md bg-gray-200 p-4 text-center font-semibold peer-checked:bg-[#1939D2] peer-checked:text-white"
              htmlFor={id}
            >
              <span>{name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

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

      <Link to="/diagnosis">
        <Button className="text-md mt-16 w-full bg-[#1939D2] py-7 font-semibold hover:bg-[#112FBD]">
          Diagnosa
        </Button>
      </Link>
    </div>
  );
};
