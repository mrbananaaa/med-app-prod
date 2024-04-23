import { DATA_GEJALA } from "@/test/symptom-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SymptomOptions = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {Object.entries(DATA_GEJALA).map(([id, name]) => (
          <div key={id} className="flex">
            <Input className="peer hidden" type="checkbox" id={id} />
            <label
              className="w-full flex justify-center items-center p-4 cursor-pointer bg-gray-200 rounded-md peer-checked:bg-[#1939D2] select-none peer-checked:text-white text-center font-semibold text-md"
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
        <h1 className="font-semibold text-3xl text-center max-w-[200px] leading-none">
          Gejala Yang Anda Rasakan
        </h1>
      </div>

      <SymptomOptions />

      <Link to="/diagnosis">
        <Button className="mt-16 py-7 w-full font-semibold text-md bg-[#1939D2] hover:bg-[#112FBD]">
          Diagnosa
        </Button>
      </Link>
    </div>
  );
};
