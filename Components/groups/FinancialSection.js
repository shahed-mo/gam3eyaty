import BasicsSection from "./BasicsSection";

const FinancialSection = (props) => {
  return (
    <section className="bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
            <span className="material-symbols-outlined !text-[24px]">tune</span>
          </div>
          <div>
            <h2 className="text-headline-md text-primary">المحددات المالية والجدول</h2>
            <p className="text-body-sm text-on-surface-variant">
              اضبطي قيمة السهم والمواعيد ويتحدث الملخص قدامك
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex px-space-sm py-1 rounded-full bg-surface-container-low text-label-sm text-primary font-semibold">
          إعدادات سريعة
        </span>
      </div>

      <BasicsSection {...props} />
    </section>
  );
};

export default FinancialSection;