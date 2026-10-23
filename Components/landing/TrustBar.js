import { Fragment } from "react";

const items = [
  { icon: "verified", color: "text-primary", text: "بياناتك خاصة بيك" },
  { icon: "percent", color: "text-secondary", text: "بدون فوائد" },
  { icon: "casino", color: "text-primary", text: "قرعة عادلة" },
  { icon: "notifications_active", color: "text-secondary", text: "تنبيهات مواعيد القبض" },
];

const TrustBar = () => {
  return (
    <div className="mt-space-lg bg-surface-container-low rounded-xl px-space-md py-space-sm shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant text-label-md">
        {items.map((item, index) => (
          <Fragment key={item.text}>
            {index > 0 && <span className="text-outline-variant">•</span>}
            <div className="flex items-center gap-1.5">
              <span className={`material-symbols-outlined ${item.color} !text-[18px]`}>
                {item.icon}
              </span>
              <span>{item.text}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;