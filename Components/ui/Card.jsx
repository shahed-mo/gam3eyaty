const FeatureCard = ({ icon, title, text, footerIcon, footerText, iconStyle, footerColor }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-space-md group-hover:scale-105 transition-transform ${iconStyle}`}
        >
          <span className="material-symbols-outlined !text-[30px]">{icon}</span>
        </div>
        <h3 className="text-headline-sm text-on-surface mb-2 font-bold">{title}</h3>
        <p className="text-body-md text-on-surface-variant leading-relaxed">{text}</p>
      </div>

      <div
        className={`mt-space-lg bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md rounded-b-xl flex items-center gap-2 text-label-md ${footerColor}`}
      >
        <span className="material-symbols-outlined !text-[18px]">{footerIcon}</span>
        <span>{footerText}</span>
      </div>
    </div>
  );
};

export default FeatureCard;