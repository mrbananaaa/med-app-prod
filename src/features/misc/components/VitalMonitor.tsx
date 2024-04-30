export const VitalMonitor = () => {
  const vitalList = ['Suhu', 'Denyut Nadi', 'Tekanan Darah'];

  return (
    <div className="mt-7 grid grid-cols-1 gap-y-2">
      {vitalList.map((label) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-md bg-blue-500 p-3 font-medium"
        >
          <div className="text-sm font-semibold leading-3 text-white sm:text-base">{label}</div>
          <div className="flex items-center justify-center rounded-md bg-white px-4 py-2">
            <div>200</div>
          </div>
        </div>
      ))}
    </div>
  );
};
