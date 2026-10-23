const steps = [
  { id: 1, label: "البيانات الأساسية" },
  { id: 2, label: "الأعضاء" },
  { id: 3, label: "الأدوار والقرعة" },
  { id: 4, label: "المراجعة والتأكيد" },
];

const styles = {
  done: {
    box: "bg-surface-container-lowest shadow-sm",
    circle: "bg-primary text-on-primary shadow-sm",
    hint: "text-primary",
    title: "text-on-surface",
    hintText: "تمّت",
  },
  active: {
    box: "bg-primary-container shadow-md",
    circle: "bg-secondary-container text-on-secondary-container font-bold",
    hint: "text-on-primary-container",
    title: "text-on-primary",
    hintText: "الخطوة الحالية",
  },
  upcoming: {
    box: "bg-surface-container-lowest/70 opacity-70",
    circle: "bg-surface-variant text-on-surface-variant font-bold",
    hint: "text-outline",
    title: "text-on-surface-variant",
    hintText: "الخطوة القادمة",
  },
};

const Stepper = ({ current }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm sm:gap-space-md mb-space-lg mt-5">
      {steps.map((step) => {
        const state =
          step.id < current ? "done" : step.id === current ? "active" : "upcoming";
        const s = styles[state];

        return (
          <div
            key={step.id}
            className={`flex items-center gap-space-sm p-space-sm sm:p-space-md rounded-xl ${s.box}`}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-label-md ${s.circle}`}
            >
              {state === "done" ? (
                <span className="material-symbols-outlined !text-[20px]">check</span>
              ) : (
                step.id
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`text-label-sm font-semibold ${s.hint}`}>{s.hintText}</span>
              <span className={`text-title truncate ${s.title}`}>{step.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;