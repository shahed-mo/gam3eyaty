import Link from "next/link";
import { getGroupInfo, getTurnMonth, formatMonth } from "@/lib/calculations";

const GroupCard = ({ group }) => {
  const { id, name, amount, count, startDate, members } = group;
  const { turn, notStarted, finished, myIndex } = getGroupInfo(group);

  const receiver = members[turn];
  const isMeNow = receiver?.id === "first";

  const progress = finished ? 100 : notStarted ? 0 : ((turn + 1) / count) * 100;

  let statusText = `الشهر ${turn + 1} من ${count}`;
  if (notStarted) statusText = `بتبدأ ${formatMonth(getTurnMonth(startDate, 0))}`;
  if (finished) statusText = "الجمعية خلصت";

  // شارة الحالة
  let badge = { text: "شغالة", style: "bg-primary-fixed text-on-primary-fixed" };
  if (notStarted) badge = { text: "لسه ما بدأتش", style: "bg-secondary-fixed text-on-secondary-fixed" };
  if (finished) badge = { text: "مكتملة", style: "bg-surface-container-high text-on-surface-variant" };
  if (isMeNow) badge = { text: "أنتِ القابضة 🎉", style: "bg-secondary-container text-on-secondary-container" };

  // لسه دورك جاي؟
  const myTurnComing = myIndex >= 0 && !finished && myIndex > turn;

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
      <div className="flex items-start justify-between gap-space-sm">
        <h3 className="text-headline-sm text-on-surface font-bold">{name}</h3>
        <span className={`px-space-sm py-1 rounded-full text-label-sm font-semibold shrink-0 ${badge.style}`}>
          {badge.text}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-space-sm bg-surface-container-low rounded-xl p-space-md">
        <div className="flex flex-col">
          <span className="text-label-sm text-on-surface-variant">القسط الشهري</span>
          <span className="text-title text-on-surface font-bold">
            {amount.toLocaleString("en-US")} ج.م
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-label-sm text-on-surface-variant">إجمالي القبض</span>
          <span className="text-title text-secondary font-bold">
            {(amount * count).toLocaleString("en-US")} ج.م
          </span>
        </div>
      </div>

      {/* مين بيقبض الشهر ده */}
      {!finished && (
        <div className="flex items-center justify-between text-body-md">
          <span className="text-on-surface-variant">
            {notStarted ? "أول دور" : "قبض هذا الشهر"}
          </span>
          <span className="text-on-surface font-semibold">
            {(notStarted ? members[0] : receiver)?.name}
          </span>
        </div>
      )}

      {/* ميعاد دورك */}
      {myTurnComing && (
        <div className="flex items-center justify-between bg-secondary-fixed text-on-secondary-fixed rounded-xl p-space-md">
          <span className="text-label-md">ميعاد دورك</span>
          <span className="text-title font-bold">
            {formatMonth(getTurnMonth(startDate, myIndex))}
          </span>
        </div>
      )}

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

      <Link
        href={`/groups/${id}`}
        className="h-12 rounded-xl bg-surface-container-low text-primary text-label-lg flex items-center justify-center gap-space-xs hover:bg-surface-container-high transition-colors"
      >
        <span>عرض التفاصيل</span>
        <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
      </Link>
    </div>
  );
};

export default GroupCard;