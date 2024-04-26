import { useShallow } from 'zustand/react/shallow';

import { Input } from '@/components/ui/input';
import { useUserStore } from '@/stores/user';
import { DATA_GEJALA } from '@/test/symptom-data';

export const SymptomOptions = () => {
  const symptom = useUserStore(useShallow((state) => state.gejala));
  const addSymptom = useUserStore((state) => state.addSypmtom);
  const removeSymptom = useUserStore((state) => state.removeSypmtom);

  console.log(symptom);

  function isChecked(gejala: string): boolean {
    if (symptom.find((v) => v === gejala)) {
      return true;
    } else {
      return false;
    }
  }

  function onChecked(e: React.ChangeEvent<HTMLInputElement>, gejala: string) {
    if (e.target.checked == true) {
      addSymptom(gejala);
    } else {
      removeSymptom(gejala);
    }

    console.log(e);
  }

  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {Object.entries(DATA_GEJALA).map(([id, name]) => (
          <div key={id} className="flex">
            <Input
              className="peer hidden"
              type="checkbox"
              id={id}
              checked={isChecked(name)}
              onChange={(e) => onChecked(e, name)}
            />
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
