import { getTurnMonth, getEndMonth, formatMonth } from "@/lib/calculations";

const Block = ({ title, onEdit, children }) => (
  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
    <div className="flex items-center justify-between">
      <h3 className="text-title text-primary">{title}</h3>
      <button
        type="button"
        onClick={onEdit}
        className="text-label-md text-secondary font-semibold hover:underline"
      >
        تعديل
      </button>
    </div>
    {children}
  </div>
);

const Row = ({ label, value }) => (
  <div className="flex justify-between gap-space-md text-body-md">
    <span className="text-on-surface-variant">{label}</span>
    <span className="text-on-surface font-semibold text-end">{value}</span>
  </div>
);

const ReviewStep = ({
  name,
  amount,
  count,
  startDate,
  collectionDay,
  order,
  goToStep,
  onConfirm,
  error,
}) => {
  const total = amount * count;

  return (
    <section className="bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
      <div className="flex items-center gap-space-sm">
        <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
          <span className="material-symbols-outlined !text-[24px]">fact_check</span>
        </div>
        <div>
          <h2 className="text-headline-md text-primary">المراجعة والتأكيد</h2>
          <p className="text-body-sm text-on-surface-variant">
            راجعي البيانات قبل ما تحفظي الجمعية
          </p>
        </div>
      </div>

      {/* البيانات الأساسية */}
      <Block title="بيانات الجمعية" onEdit={() => goToStep(1)}>
        <Row label="الاسم" value={name} />
        <Row label="قيمة السهم" value={`${amount.toLocaleString("en-US")} ج.م`} />
        <Row label="عدد الأعضاء" value={`${count} أعضاء`} />
        <Row label="أول قسط" value={formatMonth(getTurnMonth(startDate, 0))} />
        <Row label="آخر قسط" value={formatMonth(getEndMonth(startDate, count))} />
        <Row label="يوم التحصيل" value={`يوم ${collectionDay} من كل شهر`} />
        <Row
          label="اللي بيقبضه كل عضو"
          value={`${total.toLocaleString("en-US")} ج.م`}
        />
      </Block>

      {/* ترتيب الأدوار */}
      <Block title="ترتيب الأدوار" onEdit={() => goToStep(3)}>
        <div className="flex flex-col gap-space-xs">
          {order.map((member, index) => (
            <div
              key={member.id}
              className="flex items-center gap-space-sm bg-surface-container-lowest rounded-xl p-space-sm"
            >
              <span
                className={`w-7 h-7 rounded-full text-label-sm font-bold flex items-center justify-center shrink-0 ${
                  index === 0
                    ? "bg-secondary-container text-on-secondary-container"
                    : "bg-primary-container text-on-primary"
                }`}
              >
                {index + 1}
              </span>
              <span className="flex-1 text-body-md text-on-surface truncate">
                {member.name}
              </span>
              <span className="text-label-sm text-on-surface-variant">
                {formatMonth(getTurnMonth(startDate, index))}
              </span>
            </div>
          ))}
        </div>
      </Block>

      {error && (
        <p className="text-body-sm text-error bg-error-container rounded-xl p-space-md">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={onConfirm}
        className="h-[52px] rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary transition-colors flex items-center justify-center gap-space-xs active:scale-95"
      >
        <span className="material-symbols-outlined !text-[20px]">check_circle</span>
        <span>تأكيد وحفظ الجمعية</span>
      </button>
    </section>
  );
};

export default ReviewStep;