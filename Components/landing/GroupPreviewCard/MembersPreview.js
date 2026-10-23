const statusStyles = {
  received: {
    circle: "bg-primary text-on-primary",
    badge: "bg-primary-fixed text-on-primary-fixed",
    icon: "done_all",
    label: "تم الاستلام",
  },
  current: {
    circle: "bg-secondary-container text-on-secondary-container",
    badge: "bg-secondary-fixed text-on-secondary-fixed",
    icon: "payments",
    label: "موعد القبض",
  },
};

const defaultMembers = [
  { turn: 1, name: "فاطمة النجار", status: "received" },
  { turn: 6, name: "أحمد كمال", status: "current" },
];

const MembersPreview = ({ members = defaultMembers }) => {
  return (
    <div className="mt-space-md flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-xl">
      {members.map((member) => {
        const style = statusStyles[member.status];

        return (
          <div
            key={member.turn}
            className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest shadow-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full text-label-sm flex items-center justify-center ${style.circle}`}
              >
                {member.turn}
              </div>
              <span className="text-label-md text-on-surface">
                {member.name} (دور {member.turn})
              </span>
            </div>

            <span
              className={`px-2 py-0.5 rounded-full text-label-sm font-semibold inline-flex items-center gap-1 ${style.badge}`}
            >
              <span className="material-symbols-outlined !text-[14px]">{style.icon}</span>
              {style.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MembersPreview;