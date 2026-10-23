import { getEndMonth, formatMonth } from "@/lib/calculations";

const SummaryCard = ({ name="", amount, count, startDate }) => {
  const total = amount * count;
  const endMonth = getEndMonth(startDate, count);

  const rows = [
    { label: "مدة الجمعية", value: `${count} شهور` },
    { label: "القسط لكل عضو", value: `${amount.toLocaleString("en-US")} ج.م` },
    { label: "آخر قسط", value: endMonth ? formatMonth(endMonth) : "—" },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
      <div>
        <h2 className="text-headline-sm text-primary">ملخص الجمعية</h2>
        <p className="text-body-sm text-on-surface-variant truncate">
          {name.trim() !== "" ? name : "لسه من غير اسم"}
        </p>
      </div>

      <div className="bg-primary text-on-primary rounded-xl p-space-lg text-center">
        <p className="text-label-md text-primary-fixed">اللي هيقبضه كل عضو في دوره</p>
        <p className="text-currency-stat text-secondary-fixed my-space-xs">
          {total.toLocaleString("en-US")} ج.م
        </p>
      </div>

      <div className="flex flex-col gap-space-sm text-body-md">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between bg-surface-container-low rounded-xl p-space-md"
          >
            <span className="text-on-surface-variant">{row.label}</span>
            <span className="text-on-surface font-semibold">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;