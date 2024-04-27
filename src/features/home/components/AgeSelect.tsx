import { useState } from 'react';

import { Input } from '@/components/ui/input';

export const AgeSelect = () => {
  const [selectedRange, setSelectedRange] = useState('');

  const ageRangeList = ['7 - 12', '13 - 30', '31 - 36', '>55'];

  return (
    <div className="mt-7 grid grid-cols-2 gap-2">
      {ageRangeList.map((range, i) => (
        <div key={i} className="flex">
          <Input
            className="peer hidden"
            type="checkbox"
            id={i.toString()}
            checked={selectedRange === range}
            onChange={() => setSelectedRange(range)}
          />
          <label
            className="text-md flex w-full cursor-pointer select-none items-center justify-center rounded-md bg-gray-200 p-4 text-center font-semibold peer-checked:bg-blue-500 peer-checked:text-white"
            htmlFor={i.toString()}
          >
            <span>{range}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
