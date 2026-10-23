import MembersPreview from "./GroupPreviewCard/MembersPreview"
import TurnsProgress from "./GroupPreviewCard/TurnsProgress"

const InteractiveCard = () => {
  return (
    <div className="lg:col-span-5 relative">
        <div className="w-full bg-surface-container-lowest rounded-xl
         p-space-lg shadow-xl relative overflow-hidden">
            {/* <!-- Card Top Bar --> */}
            <div className="flex items-center justify-between pb-space-md mb-space-md 
            bg-surface-container-low -mx-space-lg -mt-space-lg p-space-md rounded-t-xl">
                <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[22px]">groups</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-title text-title text-on-surface">جمعية عائلة السيّد</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">10 أعضاء • السهم 3,000 ج.م</span>
                    </div>
                </div>
                <span className="px-space-sm py-1 rounded-full bg-secondary-container
                 text-on-secondary-container font-label-sm text-label-sm font-bold">نشطة حالياً</span>
            </div>
            {/* <!-- Progress Ring & Payout Box --> */}
            <div className="flex items-center justify-between gap-space-md my-space-sm
             bg-surface-container-low p-space-md rounded-xl">
                <div className="flex items-center gap-space-md">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-surface-dim" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                            <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="60, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                        </svg>
                        <span className="absolute font-headline-sm text-headline-sm text-primary font-bold">6/10</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">إجمالي المقبوض</span>
                        <span className="font-headline-sm text-headline-sm text-primary font-bold">30,000 ج.م</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">الشهر الحالي: يونيو 2025</span>
                    </div>
                </div>
                <div className="text-left flex flex-col items-end">
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">الدور الحالي</span>
                    <span className="font-title text-title text-on-surface font-bold">م. أحمد كمال</span>
                </div>
             </div>
             <TurnsProgress/>
             <MembersPreview/>
         </div>
    </div>
  )
}

export default InteractiveCard