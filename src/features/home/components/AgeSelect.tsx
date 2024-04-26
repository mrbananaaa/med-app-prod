import { Button } from '@/components/ui/button';

export const AgeSelect = () => {
  return (
    <div className="mt-7 grid grid-cols-2 gap-2">
      {(['7 - 12', '13 - 30', '31 - 36', '>55'] as const).map((range, i) => (
        <Button key={i} className="bg-[#1939D2] py-8 text-base font-semibold hover:bg-[#112FBD]">
          {range} tahun
        </Button>
      ))}
    </div>
  );
};
