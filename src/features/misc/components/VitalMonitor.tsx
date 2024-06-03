import { useSensorData } from '../hooks/useSensorData';

export const VitalMonitor = () => {
  const { sensorData } = useSensorData();

  const data = [
    ['Suhu', 'C', `${sensorData?.suhu}`],
    ['Denyut Nadi', 'Bpm', `${sensorData?.detak_jantung_per_menit}`],
    ['Tekanan Darah', 'mmHg', `${sensorData?.sistole}/${sensorData?.diastole}`],
  ] as const;

  return (
    <div className="mt-7 grid grid-cols-1 gap-y-2">
      {data.map(([label, unit, value]) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-md bg-blue-500 p-3 font-medium"
        >
          <div className="text-sm font-semibold leading-3 text-white sm:text-base">{label}</div>
          <div className="flex min-w-[120px] items-center justify-center rounded-md bg-white px-4 py-2">
            <div className="text-xs">
              {value === 'undefined' || value === 'undefined/undefined' ? 0 : value}{' '}
              <span className="font-semibold text-gray-500">{unit}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
