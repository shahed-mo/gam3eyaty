import Link from 'next/link'
import React from 'react'

const InteractiveBanner = () => {
  return (
    <section className="py-space-xl mb-space-lg" id="how-it-works">
        <div className="bg-primary-container text-on-primary rounded-xl p-space-xl flex flex-col md:flex-row items-center 
        justify-between gap-space-lg shadow-xl relative overflow-hidden">
            <div className="flex flex-col gap-space-xs max-w-xl z-10">
                <span className="font-label-lg text-label-lg text-primary-fixed">جاهز تبدأ جمعيتك الجاية؟</span>
                <h3 className="font-headline-lg text-headline-lg font-bold">ابدأ جمعيتك خلال دقيقتين بس وادعُ أصحابك</h3>
                <p className="font-body-md text-body-md text-primary-fixed-dim">بدون بطاقات ائتمانية، بدون شروط تعجيزية، بأمان التكافل المجتمعي المصري الأصيل.</p>
            </div>
            <div className="flex items-center gap-space-md z-10">
                <Link className="inline-flex items-center justify-center 
                h-[52px] px-space-xl rounded-xl bg-secondary-container text-on-secondary-container
                 font-headline-sm text-headline-sm hover:bg-secondary-fixed
                  transition-all duration-200 shadow-md" href="/groups/new">
                     أنشئ جمعيتك الآن
                </Link>
            </div>
        </div>
    </section>
  )
}

export default InteractiveBanner