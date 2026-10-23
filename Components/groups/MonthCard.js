import {
  getTurnMonth,
  formatMonth,
  countPaid,
  paymentKey,
} from "@/lib/calculations";

const MonthCard = ({ group, turnIndex, status, isOpen, onToggleOpen, onTogglePayment }) => {
  const { members, amount, count, startDate, payments = {} } = group;

  const receiver = members[turnIndex];
  const paid = countPaid(group, turnIndex);
  const isCurrent = status === "current";
  const isPast = status === "past";

  return (
    <div
      className={`bg-surface-container-lowest rounded-xl shadow-md overflow-hidden ${
        isCurrent ? "border-2 border-secondary-container" : ""
      }`}
    >
      {/* رأس الكارت: بيفتح ويقفل */}
      <button
        type="button"
        onClick={onToggleOpen}
        className="w-full flex items-center gap-space-md p-space-md text-start"
      >
        <span
          className={`w-10 h-10 rounded-full text-label-md font-bold flex items-center justify-center shrink-0 ${
            isCurrent
              ? "bg-secondary-container text-on-secondary-container"
              : "bg-primary-container text-on-primary"
          }`}
        >
          {turnIndex + 1}
        </span>

        <div className="flex-1 min-w-0">
          <p className="text-title text-on-surface truncate">{receiver.name}</p>
          <p className="text-label-sm text-on-surface-variant">
            {formatMonth(getTurnMonth(startDate, turnIndex))}
          </p>
        </div>

        {isCurrent && (
          <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-semibold shrink-0">
            الشهر ده
          </span>
        )}
        {isPast && (
          <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant text-label-sm font-semibold shrink-0">
            عدّى
          </span>
        )}

        <span className="text-label-md text-on-surface-variant shrink-0">
          {paid}/{count}
        </span>
        <span className="material-symbols-outlined text-on-surface-variant">
          {isOpen ? "expand_less" : "expand_more"}
        </span>
      </button>

      {/* قايمة الأعضاء */}
      {isOpen && (
        <div className="px-space-md pb-space-md flex flex-col gap-space-sm">
          <div className="flex justify-between bg-surface-container-low rounded-xl p-space-md text-body-sm">
            <span className="text-on-surface-variant">اتجمّع</span>
            <span className="text-on-surface font-semibold">
              {(paid * amount).toLocaleString("en-US")} من{" "}
              {(count * amount).toLocaleString("en-US")} ج.م
            </span>
          </div>

          {members.map((member) => {
            const isPaid = Boolean(payments[paymentKey(turnIndex, member.id)]);

            // مدفعش وشهره عدّى = متأخر
            let style = "bg-surface-container-low text-on-surface-variant";
            let label = "لسه";
            let icon = "schedule";

            if (isPaid) {
              style = "bg-primary-fixed text-on-primary-fixed";
              label = "دفع";
              icon = "check_circle";
            } else if (isPast) {
              style = "bg-error-container text-on-error-container";
              label = "متأخر";
              icon = "error";
            }

            return (
              <div
                key={member.id}
                className="flex items-center justify-between gap-space-sm bg-surface-container-low rounded-xl p-space-sm"
              >
                <span className="text-body-md text-on-surface truncate ps-space-xs">
                  {member.name}
                  {member.id === "first" && " (أنتِ)"}
                </span>

                <button
                  type="button"
                  onClick={() => onTogglePayment(turnIndex, member.id)}
                  className={`h-10 px-space-md rounded-xl text-label-md font-semibold inline-flex items-center gap-space-xs shrink-0 transition-colors ${style}`}
                >
                  <span className="material-symbols-outlined !text-[18px]">{icon}</span>
                  <span>{label}</span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MonthCard;