"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Stepper from "./Stepper";
import FinancialSection from "./FinancialSection";
import MembersList from "./MembersList";
import TurnOrder from "./TurnOrder";
import ReviewStep from "./ReviewStep";
import SummaryCard from "./SummaryCard";
import { saveGroup } from "@/lib/storage";

const CreateGroupForm = () => {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(2000);
  const [count, setCount] = useState(10);
  const [startDate, setStartDate] = useState("");
  const [collectionDay, setCollectionDay] = useState(1);
  const [members, setMembers] = useState([{ id: "first", name: "" }]);
  const [order, setOrder] = useState([]);

  const [savedGroup, setSavedGroup] = useState(null);
  const [error, setError] = useState("");

  let canGoNext = true;
  if (step === 1) {
    canGoNext = name.trim() !== "" && startDate !== "" && amount >= 500;
  }
  if (step === 2) {
    canGoNext =
      members.length === count && members.every((m) => m.name.trim() !== "");
  }

  const goNext = () => {
    // أول ما نعدّي من الأعضاء للقرعة، الترتيب المبدئي هو ترتيب الكتابة
    if (step === 2) setOrder(members);
    setStep((s) => Math.min(4, s + 1));
  };
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const confirm = () => {
    const group = {
      id: crypto.randomUUID(),
      name: name.trim(),
      amount,
      count,
      startDate,
      collectionDay,
      members: order, // مرتبة حسب الأدوار
      payments: {}, // هنستخدمها بعدين لتتبع مين دفع
      createdAt: new Date().toISOString(),
    };

    if (saveGroup(group)) {
      setSavedGroup(group);
      setError("");
    } else {
      setError("معرفناش نحفظ الجمعية. جرّبي تاني.");
    }
  };

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-xl bg-surface-container-low p-space-md sm:p-space-xl shadow-sm mb-space-xl">
        <Header />
        <Stepper current={savedGroup ? 5 : step} />
      </div>

      {savedGroup ? (
        <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col items-center text-center gap-space-md">
          <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
            <span className="material-symbols-outlined !text-[36px]">check_circle</span>
          </div>
          <h2 className="text-headline-md text-primary">
            اتحفظت جمعية "{savedGroup.name}"
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-md">
            الجمعية محفوظة على جهازك ده في المتصفح. لو مسحتي بيانات المتصفح هتتمسح.
          </p>
          <Link
            href="/dashboard"
            className="h-[52px] px-space-xl rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary transition-colors inline-flex items-center"
          >
            روحي لجمعياتي
          </Link>
        </section>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            {step === 1 && (
              <FinancialSection
                name={name}
                setName={setName}
                amount={amount}
                setAmount={setAmount}
                count={count}
                setCount={setCount}
                startDate={startDate}
                setStartDate={setStartDate}
                collectionDay={collectionDay}
                setCollectionDay={setCollectionDay}
              />
            )}

            {step === 2 && (
              <MembersList members={members} setMembers={setMembers} count={count} />
            )}

            {step === 3 && (
              <TurnOrder
                order={order}
                setOrder={setOrder}
                amount={amount}
                startDate={startDate}
              />
            )}

            {step === 4 && (
              <ReviewStep
                name={name}
                amount={amount}
                count={count}
                startDate={startDate}
                collectionDay={collectionDay}
                order={order}
                goToStep={setStep}
                onConfirm={confirm}
                error={error}
              />
            )}

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={goBack}
                className={`h-12 px-space-lg rounded-xl bg-surface-container-lowest text-primary text-label-lg shadow-sm ${
                  step === 1 ? "invisible" : ""
                }`}
              >
                الرجوع
              </button>

              {step < 4 && (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canGoNext}
                  className="h-12 px-space-xl rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  التالي
                </button>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <SummaryCard
              name={name}
              amount={amount}
              count={count}
              startDate={startDate}
            />
          </aside>
        </div>
      )}
    </>
  );
};

export default CreateGroupForm;