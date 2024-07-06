import { Leaf, NotebookText, LibraryBig } from "lucide-react";
import Image from "next/image";
import MenuLink from "@/app/dashboard/ui/menulink/menulink";

import Avatar from "@/app/avatar.svg"

const menuItems = [
  {
    title: "Dashboard",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <Leaf />,
      },
      {
        title: "Diagnosa",
        path: "/dashboard/diagnosa",
        icon: <NotebookText />,
      },
      {
        title: "Book",
        path: "/dashboard/book",
        icon: <LibraryBig />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-[40px]">
      <div className="flex items-center gap-5 mb-5">
        <Image src={Avatar} alt="avatar" width={50} height={50} className="bg-slate-50 rounded-full" />
        <div className="flex flex-col">
          <span className="text-xl font-bold">Lambang</span>
          <span className="text-sm">Administrator</span>
        </div>
       
      </div>
      <ul>
        {menuItems.map((cat) => (
          <div key={cat.title}>
            {cat.title}
            <div className=" ">
              {cat.list.map((item) => (
               <MenuLink key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
