import Link from "next/link";
import TrustBar from "./TrustBar";
import InteractiveCard from "./InteractiveCard";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-space-md pb-space-2xl">
      <div className="absolute -top-24 right-10 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
        {/* النص (7 أعمدة) */}
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-sm self-start px-space-md py-1.5 rounded-full bg-surface-container-high shadow-sm">
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-primary"></span>
            </span>
            <span className="text-label-md text-primary">حل التكافل المالي العصري في مصر</span>
          </div>

          <h1 className="text-display-mobile md:text-display text-primary">
            نظّم جمعيتك بسهولة وبثقة
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-xl">
            منصتك الذكية لإدارة الجمعيات الشهرية العائلية ومع الأصدقاء، تتبّع الأدوار والدفعات بشفافية تامة وبدون أي تعقيد.
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <Link
              href="/groups/new"
              className="inline-flex items-center justify-center gap-space-xs h-[52px] px-space-xl rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <span className="material-symbols-outlined !text-[20px]">rocket_launch</span>
              <span>ابدأ دلوقتي</span>
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-space-xs h-[52px] px-space-lg rounded-xl bg-surface-container-lowest text-primary text-label-lg shadow-sm hover:bg-surface-container-high transition-all duration-200"
            >
              <span className="material-symbols-outlined !text-[20px]">help_center</span>
              <span>كيف تعمل الجمعية؟</span>
            </a>
          </div>

          <TrustBar />
        </div>
        {/* Interactive Card */}
        <InteractiveCard/>
      </div>
    </section>
  );
};

export default HeroSection;