"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getGroup, updateGroup } from "@/lib/storage";
import { getGroupInfo, paymentKey } from "@/lib/calculations";
import DetailsSummary from "./DetailsSummary";
import MonthCard from "./MonthCard";

const GroupDetails = ({ id }) => {
  const [group, setGroup] = useState(undefined); // undefined = بنحمّل
  const [openTurn, setOpenTurn] = useState(0);

  useEffect(() => {
    const found = getGroup(id);
    setGroup(found);

    if (found) {
      // نفتح الشهر الحالي لوحده (ونمنعه يخرج برّه الأدوار)
      const { turn } = getGroupInfo(found);
      setOpenTurn(Math.min(Math.max(turn, 0), found.count - 1));
    }
  }, [id]);

  if (group === undefined) {
    return (
      <div className="flex flex-col items-center justify-center gap-space-md min-h-[60vh] text-on-surface-variant">
        <span className="w-14 h-14 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <p className="text-body-md">جاري التحميل...</p>
      </div>
    );
  }

  if (group === null) {
    return (
      <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col items-center text-center gap-space-md">
        <h2 className="text-headline-md text-primary">الجمعية دي مش موجودة</h2>
        <p className="text-body-md text-on-surface-variant max-w-md">
          يمكن اتمسحت، أو اتحفظت على متصفح تاني.
        </p>
        <Link
          href="/dashboard"
          className="h-[52px] px-space-xl rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary transition-colors inline-flex items-center"
        >
          رجوع لجمعياتي
        </Link>
      </div>
    );
  }

  const info = getGroupInfo(group);

  // تأشير الدفع: ننسخ، نعدّل في النسخة، نحفظ
  const togglePayment = (turnIndex, memberId) => {
    const key = paymentKey(turnIndex, memberId);
    const payments = { ...group.payments, [key]: !group.payments?.[key] };
    const updated = { ...group, payments };

    setGroup(updated);
    updateGroup(updated);
  };

  // حالة كل شهر: عدّى / الحالي / لسه
  const statusOf = (index) => {
    if (index < info.turn) return "past";
    if (index === info.turn) return "current";
    return "future";
  };

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
        <h1 className="text-headline-lg text-primary">{group.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <h2 className="text-headline-sm text-on-surface">جدول الشهور</h2>

          {group.members.map((_, index) => (
            <MonthCard
              key={index}
              group={group}
              turnIndex={index}
              status={statusOf(index)}
              isOpen={openTurn === index}
              onToggleOpen={() => setOpenTurn(openTurn === index ? -1 : index)}
              onTogglePayment={togglePayment}
            />
          ))}
        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-28">
          <DetailsSummary group={group} info={info} />
        </aside>
      </div>
    </>
  );
};

export default GroupDetails;