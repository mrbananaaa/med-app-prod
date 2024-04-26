export const VitalMonitoring = () => {
  return (
    <div className="mt-7 grid grid-cols-2 gap-2">
      {(['Suhu', 'Denyut Nadi', 'Tekanan Darah'] as const).map((label) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-md bg-[#1939D2] p-3 font-medium"
        >
          <div className="max-w-[40px] text-xs leading-3 text-white">{label}</div>
          <div className="flex items-center justify-center rounded-md bg-white px-4 py-2">
            <div>200</div>
          </div>
        </div>
      ))}
    </div>
  );
};
