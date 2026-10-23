import Link from "next/link"

const Button = () => {
  return (
     <Link
    href="/groups/new"
    className="hidden sm:inline-flex items-center justify-center h-[44px] px-space-md rounded-xl bg-secondary-container text-on-secondary-container text-label-lg hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors shadow-[0_2px_8px_-2px_rgba(27,46,40,0.08)]"
  >
    بدء جمعية جديدة
  </Link>
  )
}

export default Button