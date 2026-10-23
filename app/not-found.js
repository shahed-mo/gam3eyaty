import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <style>{`
        @keyframes nf-rise {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes nf-fade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nf-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes nf-pulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes nf-wiggle {
          0%, 100% { transform: rotate(0); }
          25%      { transform: rotate(-14deg); }
          75%      { transform: rotate(14deg); }
        }

        .nf-card   { animation: nf-rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .nf-float  { animation: nf-float 3.2s ease-in-out infinite; }
        .nf-pulse  { animation: nf-pulse 2.4s ease-out infinite; }
        .nf-d1     { animation: nf-fade 0.5s ease-out 0.25s both; }
        .nf-d2     { animation: nf-fade 0.5s ease-out 0.4s both; }
        .nf-d3     { animation: nf-fade 0.5s ease-out 0.55s both; }
        .nf-d4     { animation: nf-fade 0.5s ease-out 0.7s both; }
        .nf-icon:hover .nf-icon-inner { animation: nf-wiggle 0.5s ease-in-out; }
        .nf-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .nf-btn:hover  { transform: translateY(-3px); }
        .nf-btn:active { transform: translateY(0) scale(0.97); }

        @media (prefers-reduced-motion: reduce) {
          .nf-card, .nf-float, .nf-pulse, .nf-d1, .nf-d2, .nf-d3, .nf-d4 {
            animation: none;
          }
          .nf-btn { transition: none; }
        }
      `}</style>

      <div className="nf-card bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col items-center text-center gap-space-md max-w-xl mx-auto mt-space-xl">
        {/* 4 [أيقونة] 4 */}
        <div dir="ltr" className="flex items-center justify-center gap-space-sm">
          <span className="text-[72px] leading-none font-bold text-primary">4</span>

          <span className="nf-float nf-icon relative w-20 h-20 flex items-center justify-center cursor-default">
            <span className="nf-pulse absolute inset-0 rounded-full bg-primary-container" />
            <span className="relative w-20 h-20 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
              <span className="nf-icon-inner material-symbols-outlined !text-[40px]">
                search_off
              </span>
            </span>
          </span>

          <span className="text-[72px] leading-none font-bold text-primary">4</span>
        </div>

        <h2 className="nf-d1 text-headline-md text-on-surface">الصفحة مش موجودة</h2>

        <p className="nf-d2 text-body-md text-on-surface-variant">
          يمكن الرابط غلط، أو الصفحة اتنقلت أو اتمسحت. ارجع للصفحة الرئيسية
          وكمّل من هناك.
        </p>

        <div className="nf-d3 flex flex-wrap items-center justify-center gap-space-sm">
          <Link
            href="/"
            className="nf-btn h-[52px] px-space-xl rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary hover:shadow-lg inline-flex items-center"
          >
            الصفحة الرئيسية
          </Link>
          <Link
            href="/dashboard"
            className="nf-btn h-[52px] px-space-xl rounded-xl border border-primary text-primary text-label-lg hover:bg-primary-container/10 inline-flex items-center"
          >
            جمعياتي
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;