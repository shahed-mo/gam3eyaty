import SectionHeader from "@/Components/landing/Hero";

const problems = [
  {
    id: 1,
    icon: "checklist",
    title: "نسيان مين دفع",
    text: "الدفتر بيضيع والرسايل بتتدفن. هنا كل شهر ليه قايمة بأسامي الأعضاء ومين دفع منهم.",
  },
  {
    id: 2,
    icon: "balance",
    title: "خلاف على الدور",
    text: "القرعة العشوائية بتدّي كل واحد نفس الفرصة، والجدول بيبان للكل من أول الجمعية.",
  },
  {
    id: 3,
    icon: "support_agent",
    title: "تعب المنظم",
    text: "المنظم مش لازم يحسب ويفتكر كل حاجة بإيده. المنصة بتحسب الشهر الحالي ومين بيقبض لوحدها.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-space-2xl w-full">
      <SectionHeader
        label="المشكلة"
        title="ليه عملنا جمعيتي؟"
        description="تلات مشاكل بتتكرر في أي جمعية بتتدار بالورق."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {problems.map((p) => (
          <div
            key={p.id}
            className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md"
          >
            <div className="w-14 h-14 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
              <span className="material-symbols-outlined !text-[30px]">{p.icon}</span>
            </div>
            <h3 className="text-headline-sm text-on-surface font-bold">{p.title}</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemsSection;