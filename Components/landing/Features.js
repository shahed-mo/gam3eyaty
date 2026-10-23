import FeatureCard from "../ui/Card";
import Hero from "./Hero";

const features = [
  {
    id: 1,
    icon: "price_check",
    title: "متابعة الدفعات",
    text: "تتبّع مين دفع ومين لسه بألوان واضحة، من غير دفاتر ولا رسايل محرجة.",
    footerIcon: "check_circle",
    footerText: "حالة كل عضو قدامك في ثانية",
    iconStyle: "bg-primary-fixed text-primary",
    footerColor: "text-primary",
  },
  {
    id: 2,
    icon: "shuffle",
    title: "ترتيب الأدوار بالقرعة",
    text: "قرعة عشوائية عادلة بين كل الأعضاء، مع إمكانية ترتيب الأدوار يدوي لو الكل متفق.",
    footerIcon: "verified",
    footerText: "نتيجة القرعة بتتحفظ للكل",
    iconStyle: "bg-secondary-fixed text-secondary",
    footerColor: "text-secondary",
  },
  {
    id: 3,
    icon: "share",
    title: "رابط مشاركة للأعضاء",
    text: "شاركي رابط للقراءة بس مع الأعضاء عشان يتابعوا دورهم وميعادهم من غير حساب ولا تطبيق.",
    footerIcon: "link",
    footerText: "رابط واحد بضغطة",
    iconStyle: "bg-primary-fixed-dim text-primary-container",
    footerColor: "text-primary",
  },
];

const Features = () => {
  return (
    <section className="py-space-2xl w-full">
      <Hero
        span="مميزات صُممت لراحتك"
        header="كل ما تحتاجه لإدارة جمعية ناجحة وسلسة"
        par="حلول بسيطة ترفع الحرج عن المنظم وتوفر الوضوح لجميع المشاركين."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {features.map((f) => (
          <FeatureCard key={f.id} {...f} />
        ))}
      </div>
    </section>
  );
};

export default Features;