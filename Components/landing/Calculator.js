"use client";

import { useState } from "react";
import CalcAmount from "./CalcAmount";
import Link from "next/link";

const Calculator = () => {
  const [amount, setAmount] = useState(2000);
  const [month, setMonth] = useState(10);

  const total = amount * month;

  return (
    <section className="py-space-2xl w-full">
      <div className="bg-surface-container rounded-xl p-space-xl shadow-lg relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* الجزء الأيمن: العنوان والسلايدرات */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div>
              <span className="text-label-md text-secondary font-bold">حاسبة جمعيتي التفاعلية</span>
              <h2 className="text-headline-lg text-primary mt-1">احسب نصيبك الإجمالي في ثوانٍ</h2>
              <p className="text-body-md text-on-surface-variant">
                اختر قيمة السهم الشهري وعدد الأشهر وشاهد فوراً كيف ستجمع المبلغ المستهدف.
              </p>
            </div>

            <CalcAmount
              amount={amount}
              month={month}
              setAmount={setAmount}
              setMonth={setMonth}
            />
          </div>

          {/* الجزء الأيسر: الكارت الأخضر */}
          <div className="lg:col-span-5">
            <div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-xl flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-secondary-container/20 blur-xl pointer-events-none"></div>

              <span className="text-label-lg text-primary-fixed mb-1">المبلغ الإجمالي عند القبض</span>
              <div className="text-currency-stat text-secondary-fixed my-space-xs">
                {total.toLocaleString("en-US")} ج.م
              </div>
              <p className="text-body-sm text-primary-fixed-dim max-w-xs mb-3">
                مبلغ كامل بدون أي اقتطاعات أو عمولات.
              </p>
              {/* <!-- Metrics breakdown --> */}
              <div className="w-full grid grid-cols-2 gap-space-sm bg-surface-container-highest/20 
              p-space-md rounded-xl backdrop-blur-sm mb-space-md">
                <div className="flex flex-col items-center">
                  <span className="font-label-sm text-label-sm text-primary-fixed">ادخارك الشهري</span>
                  <span className="font-headline-sm text-headline-sm font-bold mt-0.5" id="monthlyStatDisplay">{amount} ج.م</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-label-sm text-label-sm text-primary-fixed">مدة الدورة</span>
                  <span className="font-headline-sm text-headline-sm font-bold mt-0.5" id="durationStatDisplay">{month} شهور</span>
                </div>
              </div>
              <Link className="w-full py-3.5 px-space-md rounded-xl bg-secondary-container
               text-on-secondary-container font-label-lg text-label-lg hover:bg-secondary-fixed 
               transition-colors shadow-sm flex items-center justify-center gap-2" href="/groups/new">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span>أنشئ جمعية بهذه الحسبة</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;