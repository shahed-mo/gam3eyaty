import { getTurnMonth, formatMonth, countPaid } from "@/lib/calculations";

const DetailsSummary = ({ group, info }) => {
  const { amount, count, startDate, members } = group;
  const { turn, notStarted, finished, myIndex } = info;

  // الدور اللي بنعرض عنه (بنمنعه يخرج برّه الأدوار)
  const current = Math.min(Math.max(turn, 0), count - 1);
  const paid = countPaid(group, current);
  const progress = finished ? 100 : notStarted ? 0 : ((turn + 1) / count) * 100;

  let statusText = `الشهر ${turn + 1} من ${count}`;
  if (notStarted) statusText = `بتبدأ ${formatMonth(getTurnMonth(startDate, 0))}`;
  if (finished) statusText = "الجمعية خلصت";

  const rows = [];

  if (!finished) {
    rows.push({
      label: notStarted ? "أول دور" : "بيقبض الشهر ده",
      value: members[current].name,
    });
    rows.push({
      label: "اتجمّع الشهر ده",
      value: `${paid} من ${count}`,
    });
  }

  if (myIndex >= 0 && !finished && myIndex >= current) {
    rows.push({
      label: "ميعاد دورك",
      value: formatMonth(getTurnMonth(startDate, myIndex)),
    });
  }

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
      <h2 className="text-headline-sm text-primary">ملخص الجمعية</h2>

      <div className="bg-primary text-on-primary rounded-xl p-space-lg text-center">
        <p className="text-label-md text-primary-fixed">اللي بيقبضه كل عضو في دوره</p>
        <p className="text-currency-stat text-secondary-fixed my-space-xs">
          {(amount * count).toLocaleString("en-US")} ج.م
        </p>
        <p className="text-label-sm text-primary-fixed-dim">
          القسط {amount.toLocaleString("en-US")} ج.م × {count} شهور
        </p>
      </div>

      <div className="flex flex-col gap-space-xs">
        <div className="flex justify-between text-label-sm text-on-surface-variant">
          <span>{statusText}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 rounded-full bg-surface-dim overflow-hidden">
          <div
            className="h-full rounded-full bg-primary-container"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {rows.length > 0 && (
        <div className="flex flex-col gap-space-sm text-body-md">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex justify-between gap-space-md bg-surface-container-low rounded-xl p-space-md"
            >
              <span className="text-on-surface-variant">{row.label}</span>
              <span className="text-on-surface font-semibold">{row.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailsSummary;