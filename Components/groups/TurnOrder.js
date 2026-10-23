import { useState } from "react";
import { shuffle, getTurnMonth, formatMonth } from "@/lib/calculations";

const TurnOrder = ({ order, setOrder, amount, startDate }) => {
  const [mode, setMode] = useState("random"); // "random" أو "manual"

  const total = amount * order.length;
  const firstMonth = formatMonth(getTurnMonth(startDate, 0));
  const lastMonth = formatMonth(getTurnMonth(startDate, order.length - 1));

  const draw = () => setOrder(shuffle(order));

  // تبديل عضو مع اللي قبله (-1) أو اللي بعده (+1)
  const move = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= order.length) return;
    const next = [...order];
    [next[index], next[target]] = [next[target], next[index]];
    setOrder(next);
  };

  return (
    <section className="bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
      {/* العنوان */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-headline-md text-primary">آلية تحديد أدوار الاستلام</h2>
          <p className="text-body-sm text-on-surface-variant mt-1">
            اختاري قرعة عشوائية أو رتّبي الأدوار بإيدك
          </p>
        </div>
        <span className="material-symbols-outlined text-secondary-container !text-[28px]">
          casino
        </span>
      </div>

      {/* اختيار الطريقة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md bg-surface-container-low p-space-xs rounded-xl">
        <label
          className={`flex items-center gap-space-md p-space-md rounded-xl cursor-pointer transition-colors ${
            mode === "random"
              ? "bg-surface-container-lowest shadow-sm"
              : "hover:bg-surface-container-lowest/50"
          }`}
        >
          <input
            type="radio"
            name="turn_mode"
            value="random"
            checked={mode === "random"}
            onChange={() => setMode("random")}
            className="accent-primary w-4 h-4"
          />
          <div className="flex flex-col">
            <span
              className={`text-title ${
                mode === "random" ? "text-primary font-bold" : "text-on-surface font-semibold"
              }`}
            >
              قرعة عشوائية 🎲
            </span>
            <span className="text-body-sm text-on-surface-variant">
              توزيع عادل بنقرة واحدة
            </span>
          </div>
        </label>

        <label
          className={`flex items-center gap-space-md p-space-md rounded-xl cursor-pointer transition-colors ${
            mode === "manual"
              ? "bg-surface-container-lowest shadow-sm"
              : "hover:bg-surface-container-lowest/50"
          }`}
        >
          <input
            type="radio"
            name="turn_mode"
            value="manual"
            checked={mode === "manual"}
            onChange={() => setMode("manual")}
            className="accent-primary w-4 h-4"
          />
          <div className="flex flex-col">
            <span
              className={`text-title ${
                mode === "manual" ? "text-primary font-bold" : "text-on-surface font-semibold"
              }`}
            >
              ترتيب يدوي بالتوافق
            </span>
            <span className="text-body-sm text-on-surface-variant">
              حددي موعد كل عضو بإيدك
            </span>
          </div>
        </label>
      </div>

      {/* بانر القرعة */}
      {mode === "random" && (
        <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined !text-[26px]">shuffle</span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-sm text-on-surface font-bold">
                السحب العشوائي
              </span>
              <span className="text-body-sm text-on-surface-variant">
                اضغطي وهيتخلط ترتيب الأعضاء عشوائي، وتقدري تعيدي السحب
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={draw}
            className="w-full sm:w-auto h-[50px] px-space-xl rounded-xl bg-secondary-container text-on-secondary-container text-headline-sm font-bold shadow-md hover:bg-secondary-fixed transition-all flex items-center justify-center gap-space-sm active:scale-95"
          >
            <span className="material-symbols-outlined !text-[22px]">play_circle</span>
            <span>اسحبي القرعة</span>
          </button>
        </div>
      )}

      {/* جدول الأدوار */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="text-label-lg text-primary font-semibold">
            جدول الأدوار ({order.length} أدوار)
          </span>
          <span className="text-label-sm text-on-surface-variant">
            {firstMonth} - {lastMonth}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-sm">
          {order.map((member, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={member.id}
                className={`flex flex-col p-space-sm rounded-xl transition-colors ${
                  isFirst
                    ? "bg-surface-container border-2 border-secondary-container shadow-sm"
                    : "bg-surface-container-low hover:bg-surface-container"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`w-6 h-6 rounded-full text-label-sm font-bold flex items-center justify-center ${
                      isFirst
                        ? "bg-secondary-container text-on-secondary-container"
                        : "bg-surface-container-highest text-on-surface"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`text-label-sm ${
                      isFirst ? "text-secondary font-bold" : "text-on-surface-variant"
                    }`}
                  >
                    {formatMonth(getTurnMonth(startDate, index))}
                  </span>
                </div>

                <span className="text-title text-on-surface font-semibold truncate">
                  {member.name}
                </span>
                <span className="text-label-sm text-on-surface-variant">
                  {total.toLocaleString("en-US")} ج.م
                </span>

                {mode === "manual" && (
                  <div className="flex items-center justify-end gap-1 mt-space-xs">
                    <button
                      type="button"
                      onClick={() => move(index, -1)}
                      disabled={index === 0}
                      aria-label="تحريك لقبل"
                      className="w-8 h-8 rounded-full text-primary hover:bg-surface-container-high transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined !text-[20px]">
                        keyboard_arrow_right
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => move(index, 1)}
                      disabled={index === order.length - 1}
                      aria-label="تحريك لبعد"
                      className="w-8 h-8 rounded-full text-primary hover:bg-surface-container-high transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <span className="material-symbols-outlined !text-[20px]">
                        keyboard_arrow_left
                      </span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TurnOrder;