"use client";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/dashboard", label: "جمعياتي" },
  { href: "/groups/new", label: "إنشاء جمعية" },
  { href: "/about", label: "عن المنصة" },
  { href: "/help", label: "المساعدة" },
];

const Navbar = () => {
  const path = usePathname();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <Image src={logo} alt="Gam3eyaty Logo" className="h-8 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary leading-none">جمعيتي</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">ادخار وتعاون مجتمعي</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-space-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                path === link.href
                  ? "bg-primary-container text-on-primary text-label-lg px-space-md py-space-xs rounded-xl"
                  : "text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <Button />

          <Suspense>
            {/* ضيف: دخول وتسجيل */}
            <Show when="signed-out">
              <SignInButton>
                <button className="text-label-lg text-on-surface-variant hover:text-on-surface transition-colors">
                  دخول
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="hidden sm:inline-flex h-10 px-space-md items-center rounded-xl bg-primary-container text-on-primary text-label-md font-semibold">
                  حساب جديد
                </button>
              </SignUpButton>
                <Link href="/dashboard"
                className="hidden md:inline-flex h-10 px-space-md 
                items-center rounded-xl border border-primary text-primary text-label-md font-semibold" >
                   كمّل كضيف
              </Link>
            </Show>

            {/* مسجّلة دخول: صورتها وقايمة الخروج */}
            <Show when="signed-in">
              <UserButton userProfileMode="navigation"  userProfileUrl="/user-profile"/>
            </Show>
          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default Navbar;