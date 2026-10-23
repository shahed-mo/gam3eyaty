import ProblemsSection from "@/Components/about/ProblemsSection";
import ScopeSection from "@/Components/about/ScopeSection";
import AboutCta from "@/Components/about/AboutCta";

export const metadata = {
  title: "عن المنصة | جمعيتي",
  description: "جمعيتي بتساعدك تنظمي الجمعية الشهرية وتتابعي مين دفع ومين لسه.",
};

const AboutPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg">
      {/* مقدمة */}
      <section className="py-space-2xl max-w-3xl">
        <span className="text-label-lg text-secondary font-bold">عن المنصة</span>
        <h1 className="text-display-mobile md:text-display text-primary mt-1">
          الجمعية بتتنظم أسهل من الدفتر
        </h1>
        <p className="text-body-lg text-on-surface-variant mt-space-md">
          الجمعية الشهرية فكرة مصرية أصيلة، وملايين الناس بتعملها. بس غالباً بتتدار بدفتر
          أو رسايل واتساب، وده بيخلي ناس تنسى مين دفع ومين لسه، وساعات بيحصل خلاف على
          الدور. جمعيتي أداة بسيطة بتشيل الحمل ده عن المنظم.
        </p>
      </section>

      <ProblemsSection />
      <ScopeSection />
      <AboutCta />
    </div>
  );
};

export default AboutPage;