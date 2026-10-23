const MembersList = ({ members, setMembers, count }) => {
  const isFull = members.length >= count;
  const tooMany = members.length > count;

  const addMember = () => {
    if (isFull) return;
    setMembers([...members, { id: crypto.randomUUID(), name: "" }]);
  };

  const removeMember = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  const updateName = (id, name) => {
    setMembers(members.map((m) => (m.id === id ? { ...m, name } : m)));
  };

  return (
    <section className="bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
      {/* العنوان */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
            <span className="material-symbols-outlined !text-[24px]">groups</span>
          </div>
          <div>
            <h2 className="text-headline-md text-primary">قايمة المشتركين</h2>
            <p className="text-body-sm text-on-surface-variant">
              اكتبي أسامي كل أعضاء الجمعية
            </p>
          </div>
        </div>

        <span
          className={`px-space-sm py-1 rounded-full text-label-sm font-semibold ${
            members.length === count
              ? "bg-primary-fixed text-on-primary-fixed"
              : "bg-surface-container-low text-primary"
          }`}
        >
          المسجلين: {members.length} / {count}
        </span>
      </div>

      {/* تنبيه لو العدد زاد */}
      {tooMany && (
        <p className="text-body-sm text-error bg-error-container rounded-xl p-space-md">
          عدد الأعضاء أكتر من المحدد ({count}). امسحي {members.length - count} للمتابعة.
        </p>
      )}

      {/* الصفوف */}
      <div className="flex flex-col gap-space-md">
        {members.map((member, index) => (
          <div key={member.id} className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary text-label-md flex items-center justify-center shrink-0">
              {index + 1}
            </div>

            <input
              type="text"
              placeholder={`اسم العضو ${index + 1}`}
              value={member.name}
              onChange={(e) => updateName(member.id, e.target.value)}
              className="flex-1 h-[52px] px-space-md rounded-xl bg-surface-container-low text-on-surface text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all shadow-inner"
            />

            {index === 0 ? (
              <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-semibold shrink-0">
                المنظم
              </span>
            ) : (
              <button
                type="button"
                onClick={() => removeMember(member.id)}
                aria-label="حذف العضو"
                className="w-10 h-10 rounded-full text-error hover:bg-error-container transition-colors flex items-center justify-center shrink-0"
              >
                <span className="material-symbols-outlined !text-[20px]">delete</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* زرار الإضافة */}
      <button
        type="button"
        onClick={addMember}
        disabled={isFull}
        className="h-[52px] rounded-xl bg-surface-container-low text-primary text-label-lg flex items-center justify-center gap-space-xs hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <span className="material-symbols-outlined !text-[20px]">person_add</span>
        <span>إضافة عضو جديد</span>
      </button>
    </section>
  );
};

export default MembersList;