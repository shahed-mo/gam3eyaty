"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col items-center text-center gap-space-md max-w-xl mx-auto mt-space-xl">
      <span className="w-16 h-16 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
        <span className="material-symbols-outlined !text-[32px]">error</span>
      </span>

      <h2 className="text-headline-md text-primary">فيه حاجة مش مظبوطة</h2>
      <p className="text-body-md text-on-surface-variant">
        معلش، حصلت مشكلة غير متوقعة ومش بإيدك. اضغط على إعادة المحاولة، ولو
        لسه موجودة ارجع للصفحة الرئيسية وجرّب تاني بعد شوية.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-space-sm">
        <button
          type="button"
          onClick={() => reset()}
          className="h-[52px] px-space-xl rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary transition-colors"
        >
          إعادة المحاولة
        </button>
        <Link
          href="/"
          className="h-[52px] px-space-xl rounded-xl border border-primary text-primary text-label-lg inline-flex items-center"
        >
          الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;