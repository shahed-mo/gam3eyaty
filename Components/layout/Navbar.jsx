
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import logo from "../../public/images/logo.png";
import Button from "../ui/Button";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/dashboard", label: "جمعياتي" },
  { href: "/groups/new", label: "إنشاء جمعية" },
  { href: "/about", label: "عن المنصة" },
  { href: "/help", label: "المساعدة" },
];

const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // اقفل القائمة لما المستخدم يروح لصفحة تانية
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  const getLinkClass = (href, mobile = false) => {
    const isActive = path === href;

    if (isActive) {
      return mobile
        ? "block rounded-xl bg-primary-container text-on-primary px-4 py-3 font-semibold"
        : "bg-primary-container text-on-primary text-label-lg px-space-md py-space-xs rounded-xl";
    }

    return mobile
      ? "block rounded-xl px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-colors"
      : "text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs";
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-3">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-space-md shrink-0"
          aria-label="الصفحة الرئيسية"
        >
          <Image
            src={logo}
            alt="Gam3eyaty Logo"
            className="h-8 w-auto object-contain"
            priority
          />

          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary leading-none">
              جمعيتي
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              ادخار وتعاون مجتمعي
            </span>
          </div>
        </Link>

        {/* روابط الديسكتوب */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* الأزرار على الديسكتوب */}
        <div className="hidden lg:flex items-center gap-space-md shrink-0">
          <Button />

          <Show when="signed-out">
            <SignInButton>
              <button className="text-label-lg text-on-surface-variant hover:text-on-surface transition-colors">
                دخول
              </button>
            </SignInButton>

            <SignUpButton>
              <button className="h-10 px-space-md inline-flex items-center rounded-xl bg-primary-container text-on-primary text-label-md font-semibold">
                حساب جديد
              </button>
            </SignUpButton>

            <Link
              href="/dashboard"
              className="h-10 px-space-md inline-flex items-center rounded-xl border border-primary text-primary text-label-md font-semibold"
            >
              كمّل كضيف
            </Link>
          </Show>

          <Show when="signed-in">
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user-profile"
            />
          </Show>
        </div>

        {/* أزرار الموبايل */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="scale-90 origin-left">
            <Button />
          </div>

          <Show when="signed-in">
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user-profile"
            />
          </Show>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="w-11 h-11 flex items-center justify-center rounded-xl text-on-surface hover:bg-surface-container transition-colors"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {isOpen && (
        <div
          id="mobile-navigation"
          dir="rtl"
          className="lg:hidden absolute top-full inset-x-0 bg-surface border-t border-outline-variant/30 shadow-lg"
        >
          <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet py-4">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={path === link.href ? "page" : undefined}
                  className={getLinkClass(link.href, true)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="my-4 border-t border-outline-variant/30" />

            {/* تسجيل الدخول والتسجيل للزائر */}
            <Show when="signed-out">
              <div className="flex flex-col gap-3">
                <SignInButton>
                  <button className="w-full min-h-11 rounded-xl border border-primary text-primary font-semibold">
                    دخول
                  </button>
                </SignInButton>

                <SignUpButton>
                  <button className="w-full min-h-11 rounded-xl bg-primary-container text-on-primary font-semibold">
                    حساب جديد
                  </button>
                </SignUpButton>

                <Link
                  href="/dashboard"
                  className="w-full min-h-11 flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors"
                >
                  كمّل كضيف
                </Link>
              </div>
            </Show>

            {/* المستخدم المسجل دخوله */}
            <Show when="signed-in">
              <div className="flex items-center gap-3 px-4 py-2 text-on-surface-variant">
                <span>حسابك الشخصي</span>
              </div>
            </Show>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
