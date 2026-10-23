const inputBase =
  "w-full h-[52px] rounded-xl bg-surface-container-low text-on-surface text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all shadow-inner";

const BasicsSection = ({
  name,
  setName,
  amount,
  setAmount,
  count,
  setCount,
  startDate,
  setStartDate,
  collectionDay,
  setCollectionDay,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
      {/* اسم الجمعية */}
      <div className="flex flex-col gap-space-xs md:col-span-2">
        <label className="text-label-lg text-on-surface" htmlFor="group-name">
          اسم الجمعية <span className="text-secondary font-bold">*</span>
        </label>
        <div className="relative flex items-center">
          <input
            id="group-name"
            type="text"
            placeholder="مثال: جمعية سفر الصيف"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${inputBase} px-space-md ps-12`}
          />
          <span className="material-symbols-outlined absolute start-4 text-outline-variant pointer-events-none !text-[22px]">
            loyalty
          </span>
        </div>
      </div>

      {/* قيمة السهم */}
      <div className="flex flex-col gap-space-xs">
        <label className="text-label-lg text-on-surface" htmlFor="share-amount">
          قيمة السهم الشهري <span className="text-secondary font-bold">*</span>
        </label>
        <div className="relative flex items-center">
          <input
            id="share-amount"
            type="number"
            min={500}
            step={500}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className={`${inputBase} px-space-md pe-14 text-title`}
          />
          <span className="absolute end-4 text-label-md text-on-surface-variant font-bold">
            ج.م
          </span>
        </div>
        <span className="text-body-sm text-on-surface-variant">
          الحد الأدنى المقترح للسهم هو 500 ج.م
        </span>
      </div>

      {/* عدد الأعضاء */}
      <div className="flex flex-col gap-space-xs">
        <label className="text-label-lg text-on-surface">
          عدد الأعضاء (= عدد الشهور) <span className="text-secondary font-bold">*</span>
        </label>
        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            onClick={() => setCount(Math.max(2, count - 1))}
            className="w-[52px] h-[52px] rounded-xl bg-surface-container-high text-primary text-headline-sm hover:bg-surface-container-highest transition-colors"
          >
            −
          </button>
          <div className="flex-1 h-[52px] rounded-xl bg-surface-container-low shadow-inner flex items-center justify-center text-title text-on-surface">
            {count} أعضاء
          </div>
          <button
            type="button"
            onClick={() => setCount(Math.min(30, count + 1))}
            className="w-[52px] h-[52px] rounded-xl bg-surface-container-high text-primary text-headline-sm hover:bg-surface-container-highest transition-colors"
          >
            +
          </button>
        </div>
        <span className="text-body-sm text-on-surface-variant">
          كل عضو يقبض شهراً واحداً
        </span>
      </div>

      {/* تاريخ أول قسط */}
      <div className="flex flex-col gap-space-xs">
        <label className="text-label-lg text-on-surface" htmlFor="start-date">
          تاريخ أول قسط <span className="text-secondary font-bold">*</span>
        </label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className={`${inputBase} px-space-md`}
        />
      </div>

      {/* يوم التحصيل */}
      <div className="flex flex-col gap-space-xs">
        <label className="text-label-lg text-on-surface" htmlFor="collection-day">
          يوم التحصيل الدوري <span className="text-secondary font-bold">*</span>
        </label>
        <div className="relative flex items-center">
          <select
            id="collection-day"
            value={collectionDay}
            onChange={(e) => setCollectionDay(Number(e.target.value))}
            className={`${inputBase} px-space-md pe-12 appearance-none cursor-pointer`}
          >
            <option value={1}>يوم 1 من كل شهر (مناسب مع الرواتب)</option>
            <option value={5}>يوم 5 من كل شهر</option>
            <option value={10}>يوم 10 من كل شهر</option>
            <option value={25}>يوم 25 من كل شهر</option>
          </select>
          <span className="material-symbols-outlined absolute end-4 text-outline-variant pointer-events-none !text-[22px]">
            calendar_today
          </span>
        </div>
        <span className="text-body-sm text-on-surface-variant">
          اليوم اللي بيتدفع فيه القسط كل شهر
        </span>
      </div>
    </div>
  );
};

export default BasicsSection;