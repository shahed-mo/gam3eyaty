import { Suspense } from "react";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import CreateGroupForm from "@/Components/groups/CreateGroupForm";

const NewGroup = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg">
      <Suspense>
        {/* مسجّلة: الفورم زي ما هو */}
        <Show when="signed-in">
          <CreateGroupForm />
        </Show>

        {/* ضيف: نطلب منه التسجيل */}
        <Show when="signed-out">
          <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-md flex flex-col items-center text-center gap-space-md max-w-xl mx-auto mt-space-xl">
            <span className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined !text-[32px]">lock</span>
            </span>

            <h2 className="text-headline-md text-on-surface">سجّل الأول عشان تعمل جمعية</h2>
            <p className="text-body-md text-on-surface-variant">
              إنشاء جمعية محتاج حساب. التسجيل بياخد دقيقة، وبعدها تقدر تعمل
              جمعياتك وتتابع الدفع.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-space-sm">
              <SignUpButton>
                <button className="h-[52px] px-space-xl rounded-xl bg-primary-container text-on-primary text-label-lg shadow-md hover:bg-primary transition-colors">
                  حساب جديد
                </button>
              </SignUpButton>
              <SignInButton>
                <button className="h-[52px] px-space-xl rounded-xl border border-primary text-primary text-label-lg">
                  عندي حساب
                </button>
              </SignInButton>
            </div>
          </div>
        </Show>
      </Suspense>
    </div>
  );
};

export default NewGroup;