import Link from "next/link";

const AboutCta = () => {
  return (
    <section className="py-space-xl mb-space-lg">
      <div className="bg-primary-container text-on-primary rounded-xl p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl">
        <div className="flex flex-col gap-space-xs max-w-xl">
          <h2 className="text-headline-lg">جاهزة تبدأي جمعيتك؟</h2>
          <p className="text-body-md text-primary-fixed-dim">
            بتاخد دقيقتين، ومن غير تسجيل حساب.
          </p>
        </div>

        <Link
          href="/groups/new"
          className="h-[52px] px-space-xl rounded-xl bg-secondary-container text-on-secondary-container text-headline-sm hover:bg-secondary-fixed transition-colors shadow-md inline-flex items-center shrink-0"
        >
          أنشئي جمعية
        </Link>
      </div>
    </section>
  );
};

export default AboutCta;