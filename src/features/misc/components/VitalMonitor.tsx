export const VitalMonitor = () => {
  const data = [
    ['Suhu', 'C'],
    ['Denyut Nadi', '?'],
    ['Tekanan Darah', '?'],
  ] as const;

  return (
    <div className="mt-7 grid grid-cols-1 gap-y-2">
      {data.map(([label, unit]) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-md bg-blue-500 p-3 font-medium"
        >
          <div className="text-sm font-semibold leading-3 text-white sm:text-base">{label}</div>
          <div className="flex items-center justify-center rounded-md bg-white px-4 py-2">
            <div>200 {unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
