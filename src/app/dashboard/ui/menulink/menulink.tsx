"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuLinkProps {
  item: {
    title: string
    path: string
    icon: React.ReactNode
  }
}

const MenuLink = ({ item }: MenuLinkProps) => {
  const pathname = usePathname()

  return (
    <Link href={item.path}>
      <div className={`p-5 flex items-center gap-3 ${pathname === item.path ? 'bg-blue-500 text-white rounded-2xl' : 'hover:bg-slate-400 rounded-2xl'}`}>
        {item.icon}
        {item.title}
      </div>
    </Link>
  )
}

export default MenuLink
