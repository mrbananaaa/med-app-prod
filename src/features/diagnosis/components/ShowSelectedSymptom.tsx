import { useUserStore } from '@/stores/user';

export const ShowSelectedSymptom = () => {
  const symptomList = useUserStore.use.gejala();

  return (
    <div className="flex flex-col space-y-2">
      {symptomList.length < 1 ? (
        <div className="rounded-md border border-dashed border-gray-400 p-4 text-center font-medium text-gray-600">
          Belum ada gejala yang dipilih.
        </div>
      ) : (
        symptomList.map((symptom, i) => (
          <div key={i} className="rounded-md bg-gray-200 p-4 font-semibold">
            {symptom}
          </div>
        ))
      )}
    </div>
  );
};
