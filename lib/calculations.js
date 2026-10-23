// آخر شهر قسط: لو بدأتي يناير وعدد الأعضاء 10، آخر قسط في أكتوبر
export function getEndMonth(startDate, count) {
  if (!startDate) return null;
  const [year, month] = startDate.split("-").map(Number); //["2026-01"] =>["2026","01"] +>[2026,1]
  return new Date(year, month - 1 + count - 1, 1); // 2026  , 1-1+10 -1
}

// اسم الشهر بالعربي والأرقام إنجليزي: "أكتوبر 2026"
export function formatMonth(date) {
  return date.toLocaleDateString("ar-EG-u-nu-latn", {
    month: "long",
    year: "numeric",
  });
}

// هنحسب الدور رقم كذا يبقي في اي شهر
export function getTurnMonth(startDate, index) {
  const [year, month] = startDate.split("-").map(Number);
  return new Date(year, month - 1 + index, 1);
}

// خلط عادل (Fisher-Yates): بيرجّع قايمة جديدة ومبيعدّلش الأصلية
export function shuffle(list) {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// هنعد كام شهر عدي  عشان اعرف مين عليه الدور يبقبض
export function getCurrentTurn(startDate, now = new Date()) {
  const [year, month] = startDate.split("-").map(Number);
  return (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month); //(2026-2025) * 12 =12
  //9+1 - 12 = -2 => 12+-2 = 10 يبقي احنا في الدور رقم 9
}

// معلومات جاهزة عن حالة الجمعية
export function getGroupInfo(group, now = new Date()) {
  const turn = getCurrentTurn(group.startDate, now);
  return {
    turn,
    notStarted: turn < 0,
    finished: turn >= group.count,
    myIndex: group.members.findIndex((m) => m.id === "first"),
  };
}

// مفتاح الدفع: رقم الدور + id العضو
export function paymentKey(turnIndex, memberId) {
  return `${turnIndex}_${memberId}`;
}

// كام عضو دفعوا في دور معين
export function countPaid(group, turnIndex) {
  return group.members.filter(
    (m) => group.payments?.[paymentKey(turnIndex, m.id)]
  ).length;
}