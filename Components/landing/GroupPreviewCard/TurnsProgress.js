const TurnsProgress = ({ total = 10, current = 6 }) => {
  const remaining = total - current;

  return (
    <div className="mt-space-md flex flex-col gap-space-xs">
      <div className="flex justify-between items-center text-on-surface-variant text-label-sm">
        <span>مسار الأدوار والأقساط</span>
        <span className="text-primary font-semibold">متبقي {remaining} أدوار</span>
      </div>

      <div className="grid grid-cols-5 gap-1.5 pt-1">
        {Array.from({ length: total }, (_, i) => {
          const turn = i + 1;

          let style = "bg-surface-dim"; // لسه
          if (turn < current) style = "bg-primary-container"; // خلص
          if (turn === current) style = "bg-secondary-container shadow-sm animate-pulse"; // الحالي

          return <div key={turn} className={`h-2 rounded-full ${style}`}></div>;
        })}
      </div>
    </div>
  );
};

export default TurnsProgress;