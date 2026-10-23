import Hero from "./Hero";

const steps = [
  {
    id: 1,
    icon: "edit_square",
    title: "أنشئي الجمعية",
    text: "اكتبي اسم الجمعية، قيمة السهم الشهري، وعدد الأعضاء وتاريخ أول قسط.",
  },
  {
    id: 2,
    icon: "shuffle",
    title: "ضيفي الأعضاء ورتّبي الأدوار",
    text: "اكتبي أسامي الأعضاء، واعملي قرعة عشوائية عشان الدور يتحدد بعدل من غير خناق.",
  },
  {
    id: 3,
    icon: "share",
    title: "تابعي الدفعات وشاركي الرابط",
    text: "أشّري مين دفع كل شهر، وابعتي رابط للقراءة بس للأعضاء يتابعوا دورهم.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-space-2xl w-full scroll-mt-24">
      <Hero
        span="ببساطة"
        header="كيف تعمل الجمعية؟"
        par="تلات خطوات وجمعيتك تبقى منظمة وواضحة للكل."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md"
          >
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
                <span className="material-symbols-outlined !text-[30px]">{step.icon}</span>
              </div>
              <span className="text-currency-stat text-secondary-fixed-dim">{step.id}</span>
            </div>

            <h3 className="text-headline-sm text-on-surface font-bold">{step.title}</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;