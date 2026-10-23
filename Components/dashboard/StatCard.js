const StatCard = ({ icon, label, value, hint }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined !text-[26px]">{icon}</span>
        </div>
        <span className="text-label-lg text-on-surface-variant">{label}</span>
      </div>
      <div>
        <p className="text-currency-stat text-primary">{value}</p>
        {hint && <p className="text-body-sm text-on-surface-variant mt-1">{hint}</p>}
      </div>
    </div>
  );
};

export default StatCard;