"use client";

import { useState } from "react";
import Link from "next/link";

// الأقسام الأربعة الأساسية
const SECTIONS = [
  {
    icon: "groups",
    title: "يعني إيه جمعية؟",
    body: "مجموعة ناس كل واحد فيهم بيدفع قسط ثابت كل شهر. وفي كل شهر واحد منهم بس بيقبض الفلوس كلها. ولما الشهور تخلص، يكون كل واحد قبض مرة.",
  },
  {
    icon: "add_circle",
    title: "إزاي أعمل جمعية جديدة؟",
    body: "من صفحة جمعياتي ادوسي على إنشاء جمعية جديدة، واكتبي اسم الجمعية والقسط الشهري وعدد الأعضاء وتاريخ البداية. وبعدين الموقع بيرتب الشهور لكل عضو.",
  },
  {
    icon: "task_alt",
    title: "إزاي أعلّم الدفع؟",
    body: "افتحي الجمعية وادوسي على كارت الشهر عشان يتفتح. هتلاقي كل الأعضاء، وجنب كل واحد زرار. ادوسي على الزرار وقت ما يدفع، ولو دوستي بالغلط ادوسي تاني يرجع زي ما كان.",
  },
];

// شرح الحالات التلاتة (نفس ألوان MonthCard)
const STATUSES = [
  {
    label: "دفع",
    icon: "check_circle",
    style: "bg-primary-fixed text-on-primary-fixed",
    text: "العضو ده دفع قسط الشهر.",
  },
  {
    label: "لسه",
    icon: "schedule",
    style: "bg-surface-container-low text-on-surface-variant",
    text: "مدفعش لحد دلوقتي، بس الشهر لسه ماعدّاش.",
  },
  {
    label: "متأخر",
    icon: "error",
    style: "bg-error-container text-on-error-container",
    text: "مدفعش والشهر عدّى خلاص.",
  },
];

// أسئلة شائعة (بتتفتح وتتقفل)
const FAQ = [
  {
    q: "الدفعات بتتحفظ فين؟",
    a: "بتتحفظ على المتصفح اللي بتستخدميه. يعني لو فتحتي الموقع من موبايل تاني أو متصفح تاني مش هتلاقي نفس الجمعيات.",
  },
  {
    q: "إيه معنى «الشهر ده»؟",
    a: "ده الشهر الحالي في الجمعية، يعني الشهر اللي بنحسبه من تاريخ البداية لحد النهارده.",
  },
  {
    q: "ليه كارت واحد بس بيبقى مفتوح؟",
    a: "عشان الصفحة تفضل مرتبة. لما تفتحي كارت تاني اللي قبله بيتقفل.",
  },
  {
    q: "مين اللي بيقبض في كل شهر؟",
    a: "الترتيب بيتحدد من ترتيب الأعضاء. العضو الأول بيقبض في الشهر الأول، والتاني في الشهر التاني، وهكذا.",
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => (
  <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center gap-space-md p-space-md text-start"
    >
      <span className="flex-1 text-title text-on-surface">{item.q}</span>
      <span className="material-symbols-outlined text-on-surface-variant">
        {isOpen ? "expand_less" : "expand_more"}
      </span>
    </button>

    {isOpen && (
      <p className="px-space-md pb-space-md text-body-md text-on-surface-variant">
        {item.a}
      </p>
    )}
  </div>
);

const HelpPage = () => {
  const [openFaq, setOpenFaq] = useState(-1); // -1 = كله مقفول

  return (
    <>
      <div className="mb-space-xl">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-space-xs text-label-lg text-secondary hover:underline mb-space-sm"
        >
          <span className="material-symbols-outlined !text-[20px]">arrow_forward</span>
          <span>جمعياتي</span>
        </Link>
        <h1 className="text-headline-lg text-primary">المساعدة</h1>
        <p className="text-body-md text-on-surface-variant mt-space-xs">
          شرح بسيط لازاي تستخدمي الموقع.
        </p>
      </div>

      <div className="flex flex-col gap-space-md max-w-3xl">
        {/* الأقسام */}
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            className="bg-surface-container-lowest rounded-xl shadow-md p-space-md flex gap-space-md"
          >
            <span className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">{section.icon}</span>
            </span>
            <div>
              <h2 className="text-title text-on-surface mb-space-xs">{section.title}</h2>
              <p className="text-body-md text-on-surface-variant">{section.body}</p>
            </div>
          </div>
        ))}

        {/* الحالات */}
        <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md">
          <h2 className="text-title text-on-surface mb-space-md">
            يعني إيه «دفع» و«لسه» و«متأخر»؟
          </h2>
          <div className="flex flex-col gap-space-sm">
            {STATUSES.map((s) => (
              <div key={s.label} className="flex items-center gap-space-md">
                <span
                  className={`h-10 px-space-md rounded-xl text-label-md font-semibold inline-flex items-center gap-space-xs shrink-0 ${s.style}`}
                >
                  <span className="material-symbols-outlined !text-[18px]">{s.icon}</span>
                  <span>{s.label}</span>
                </span>
                <p className="text-body-md text-on-surface-variant">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* الأسئلة الشائعة */}
        <h2 className="text-headline-sm text-on-surface mt-space-md">أسئلة شائعة</h2>
        {FAQ.map((item, index) => (
          <FaqItem
            key={item.q}
            item={item}
            isOpen={openFaq === index}
            onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
          />
        ))}
      </div>
    </>
  );
};

export default HelpPage;
