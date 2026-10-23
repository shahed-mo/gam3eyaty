import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";

const links = [
  { href: "/about", label: "عن المنصة" },
  { href: "/terms", label: "الشروط والأحكام" },
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/help", label: "مركز المساعدة" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-low py-space-2xl mt-auto shadow-[0_-1px_4px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <Link href="/" className="flex items-center gap-space-md">
            <Image src={logo} alt="Gam3eyaty Logo" className="h-8 w-auto object-contain" />
            <span className="text-headline-sm text-primary">جمعيتي</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-space-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest/50 p-space-md rounded-xl">
          <div className="flex items-center gap-space-sm text-primary">
            <span className="material-symbols-outlined !text-[20px]">verified_user</span>
            <span className="text-label-md text-on-surface">بياناتك خاصة بيك، وبدون أي رسوم</span>
          </div>
          <div className="text-body-sm text-on-surface-variant text-center sm:text-start">
            جميع الحقوق محفوظة لمنصة جمعيتي © {year}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;