"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getGroups } from "@/lib/storage";
import { getGroupInfo, getTurnMonth, formatMonth } from "@/lib/calculations";
import GroupCard from "./GroupCard";
import StatCard from "./StatCard";
import { Show, SignUpButton } from "@clerk/nextjs";

const tabs = [
  { key: "active", label: "الشغالة" },
  { key: "finished", label: "المكتملة" },
  { key: "all", label: "الكل" },
];

const GroupsList = () => {
  const [groups, setGroups] = useState(null); // null = لسه بنحمّل
  const [tab, setTab] = useState("active");

  useEffect(() => {
    setGroups(getGroups());
  }, []);

  if (groups === null) {
  return (
    <div className="flex flex-col items-center justify-center gap-space-md min-h-[60vh] text-on-surface-variant">
      <span className="w-14 h-14 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      <p className="text-body-md">جاري التحميل...</p>
    </div>
  );
}

  if (groups.length === 0) {
    return (
      <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col items-center text-center gap-space-md">
        <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center">
          <span className="material-symbols-outlined !text-[36px]">diversity_3</span>
        </div>
        <h2 className="text-headline-md text-primary">لسه معندكيش جمعيات</h2>
        <p className="text-body-md text-on-surface-variant max-w-md">
          ابدئي بجمعية جديدة، وهتظهر هنا.
        </p>
        <Link
          href="/groups/new"
          className="h-[52px] px-space-xl rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary transition-colors inline-flex items-center"
        >
          إنشاء جمعية جديدة
        </Link>
      </div>
    );
  }

  // تقسيم الجمعيات
  const active = groups.filter((g) => !getGroupInfo(g).finished);
  const finished = groups.filter((g) => getGroupInfo(g).finished);
  const shown = tab === "active" ? active : tab === "finished" ? finished : groups;

  // إجمالي الأقساط الشهرية للجمعيات الشغالة
  const running = active.filter((g) => !getGroupInfo(g).notStarted);
  const monthly = running.reduce((sum, g) => sum + g.amount, 0);

  // أقرب دور قبض ليكي
  let next = null;
  for (const g of active) {
    const { turn, myIndex } = getGroupInfo(g);
    if (myIndex >= 0 && myIndex >= Math.max(turn, 0)) {
      const date = getTurnMonth(g.startDate, myIndex);
      if (!next || date < next.date) next = { date, group: g };
    }
  }

  const counts = { active: active.length, finished: finished.length, all: groups.length };

  return (
    <div className="flex flex-col gap-space-xl">
      <Show when="signed-out">
        <div className="bg-surface-container-high rounded-xl p-space-md flex items-center justify-between gap-space-md mb-space-md">
          <p className="text-body-md text-on-surface">
             إنتِ داخلة كضيف، والجمعيات محفوظة على المتصفح ده بس.
          </p>
        <SignUpButton>
          <button className="h-10 px-space-md rounded-xl bg-primary-container text-on-primary text-label-md font-semibold shrink-0">
          سجّلي حساب
        </button>
      </SignUpButton>
    </div>
  </Show>
      {/* الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        <StatCard
          icon="diversity_3"
          label="الجمعيات الشغالة"
          value={active.length}
          hint={`من ${groups.length} جمعية`}
        />
        <StatCard
          icon="payments"
          label="أقساطك الشهرية"
          value={`${monthly.toLocaleString("en-US")} ج.م`}
          hint="مجموع أقساط الجمعيات الشغالة"
        />
        <StatCard
          icon="star"
          label="دورك القادم للقبض"
          value={next ? formatMonth(next.date) : "—"}
          hint={
            next
              ? `${(next.group.amount * next.group.count).toLocaleString("en-US")} ج.م من ${next.group.name}`
              : "مفيش دور جاي"
          }
        />
      </div>

      {/* التابات */}
      <div className="grid grid-cols-3 gap-1 bg-surface-container-low p-1 rounded-xl max-w-md">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`h-11 rounded-xl text-label-lg transition-colors ${
              tab === t.key
                ? "bg-surface-container-lowest text-primary shadow-sm"
                : "text-on-surface-variant"
            }`}
          >
            {t.label} ({counts[t.key]})
          </button>
        ))}
      </div>

      {/* الكروت */}
      {shown.length === 0 ? (
        <p className="text-body-md text-on-surface-variant">مفيش جمعيات هنا.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {shown.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupsList;