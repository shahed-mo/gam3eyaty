import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">خطوة جديدة نحو استقرارك المالي</span>
            <h1 className="font-headline-lg text-headline-lg text-primary mt-1">إنشاء جمعية جديدة</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">نظّم مدخراتك بثقة وأمان مع عائلتك وأصدقائك بضمانات إلكترونية شفافة</p>
        </div>
        <div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-space-sm rounded-full shadow-sm self-start md:self-auto">
            <span className="material-symbols-outlined text-secondary-container" style={{fontVariationSettings: "Fill:1"}}>shield</span>
            <span className="font-label-md text-label-md text-on-surface">نظّمي مدخراتك بثقة مع عائلتك وأصدقائك</span>
        </div>
    </div>
  )
}

export default Header