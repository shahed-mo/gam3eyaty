import SectionHeader from "@/Components/landing/Hero";

const columns = [
  {
    id: "does",
    title: "بتعمل إيه",
    icon: "check_circle",
    iconColor: "text-primary",
    items: [
      "تسجيل بيانات الجمعية: القسط وعدد الأعضاء وتاريخ البداية",
      "قرعة عشوائية أو ترتيب يدوي للأدوار",
      "تحديد مين بيقبض كل شهر",
      "تأشير مين دفع ومين لسه",
    ],
  },
  {
    id: "doesnt",
    title: "مبتعملش إيه",
    icon: "cancel",
    iconColor: "text-error",
    items: [
      "مبتستلمش ولا بتحوّل فلوس، التحصيل والقبض بينكم انتو",
      "مفيش تنبيهات أو رسايل واتساب لحد دلوقتي",
      "مفيش حسابات، والبيانات محفوظة في متصفحك أنتِ بس",
    ],
  },
  {
    id: "soon",
    title: "جاي بعدين",
    icon: "schedule",
    iconColor: "text-secondary",
    items: [
      "رابط مشاركة للأعضاء يتابعوا منه من غير حساب",
      "حفظ البيانات على السيرفر بدل المتصفح",
      "تسجيل دخول",
    ],
  },
];

const ScopeSection = () => {
  return (
    <section className="py-space-2xl w-full">
      <SectionHeader
        label="بصراحة"
        title="إيه اللي موجود وإيه اللي لسه؟"
        description="المنصة بسيطة ومقصودة، وده اللي تقدري تعتمدي عليه دلوقتي."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {columns.map((col) => (
          <div
            key={col.id}
            className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md"
          >
            <h3 className="text-headline-sm text-on-surface font-bold">{col.title}</h3>

            <ul className="flex flex-col gap-space-sm">
              {col.items.map((item) => (
                <li key={item} className="flex items-start gap-space-sm text-body-md text-on-surface-variant">
                  <span className={`material-symbols-outlined !text-[20px] shrink-0 mt-0.5 ${col.iconColor}`}>
                    {col.icon}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScopeSection;