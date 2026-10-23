import React, { useState } from 'react'

const CalcAmount = ({ amount, month, setAmount, setMonth }) => {
  return (
    <>
      {/* سلايدر المبلغ */}
      <div className="flex flex-col gap-2 bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <label className="text-title text-on-surface" htmlFor="shareAmountSlider">
            مبلغ السهم الشهري
          </label>
          <span className="text-headline-sm text-primary font-bold">
            {amount.toLocaleString("en-US")} ج.م
          </span>
        </div>
        <input
          id="shareAmountSlider"
          type="range"
          min={500}
          max={10000}
          step={500}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-2.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between text-on-surface-variant text-label-sm">
          <span>500 ج.م</span>
          <span>5,000 ج.م</span>
          <span>10,000 ج.م</span>
        </div>
      </div>

      {/* سلايدر الشهور */}
      <div className="flex flex-col gap-2 bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
          <label className="text-title text-on-surface" htmlFor="monthsSlider">
            عدد الأشهر (المشتركين)
          </label>
          <span className="text-headline-sm text-secondary font-bold">{month} شهور</span>
        </div>
        <input
          id="monthsSlider"
          type="range"
          min={5}
          max={20}
          step={1}
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          className="w-full h-2.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
        />
        <div className="flex justify-between text-on-surface-variant text-label-sm">
          <span>5 شهور</span>
          <span>10 شهور</span>
          <span>20 شهر</span>
        </div>
      </div>
    </>
  );
};

export default CalcAmount;