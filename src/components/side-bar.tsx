"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftCircleIcon,
  ClipboardDocumentCheckIcon,
  CubeTransparentIcon,
  LinkIcon,
  DocumentTextIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";

interface MenuItem {
  title: string;
  src: string;
  path: string;
  gap?: boolean;
}

const Menus: MenuItem[] = [
  { title: "My Diagnosis", src: "duplicate", path: "/", gap: true },
  { title: "Data Objektif", src: "barcode", path: "/textgenerate" },
  { title: "Persiapan Operasi", src: "link", path: "/Googlelist" },
  { title: "Operasi Prosedur ", src: "document", path: "/operasiprosedur" },
];

interface SideBarProps {
  initialOpen?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ initialOpen = true }) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5 bg-blue-950 pt-8 duration-300 sticky top-0 z-50`}
    >
      <ArrowLeftCircleIcon
        className={`absolute cursor-pointer duration-500  bg-yellow-200 -right-3 top-9 w-7 border-slate-200 border-2 rounded-full  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <Link href="/">
          <Image
            src="https://raw.githubusercontent.com/lambangws21/react-diagnosa-keperawatan/1c0d9e494af6c4bb735ba7f0553a0bded0b1fc31/src/img/logo.webp"
            alt="logo"
            width={open ? 64 : 40} // 64px (16 * 4) for w-16 and 40px (10 * 4) for w-10
            height={open ? 64 : 40} // Same logic as above
            className={`cursor-pointer duration-500 rounded-full ${
              open ? "w-16 h-16" : "w-10 h-10 "
            } border-x-2 border hover:ring-8  bg-white inset-0  ${
              open && "rotate-[360deg]"
            }`}
          />
        </Link>
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Nursing
        </h1>
      </div>
      {/* <div className="flex flex-col items-center justify-center mt-6">
        <Image
          src="https://raw.githubusercontent.com/lambangws21/react-diagnosa-keperawatan/main/src/img/profil.webp"
          alt="lambang"
          width={open ? 64 : 40}
          height={open ? 64 : 40}
          className={` flex justify-end rounded-full border bg-yellow-200 border-white cursor-pointer ${
            open ? "w-16 h-16" : "w-10 h-10 "
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Welcome!
        </h1>
        <p
          className={`text-white origin-left font-medium text-md duration-200 ${
            !open && "scale-0"
          }`}
        >
          Selamat Beraktivitas
        </p>
      </div> */}
      <ul className="pt-5">
        {Menus.map((Menu, index) => (
          <Link key={index} href={Menu.path}>
            <li
              className={`flex group border border-b-gray-50 rounded-md p-2 cursor-pointer hover:bg-blue-900 text-gray-300 text-sm items-center gap-x-5 duration-500 
                ${Menu.gap ? "mt-4" : "mt-5"} `}
            >
              {Menu.src === "duplicate" && (
                <ClipboardDocumentCheckIcon className="h-7 w-7 text-yellow-300" />
              )}
              {Menu.src === "barcode" && (
                <QrCodeIcon className="h-7 w-7 text-yellow-300" />
              )}
              {Menu.src === "list" && (
                <CubeTransparentIcon className="h-7 w-7 text-yellow-300" />
              )}
              {Menu.src === "link" && (
                <LinkIcon className="h-7 w-7 text-yellow-300" />
              )}
              {Menu.src === "document" && (
                <DocumentTextIcon className="h-7 w-7 text-yellow-300" />
              )}
              <span
                className={`${
                  !open && "hidden"
                } origin-left w-36 duration-700  absolute ml-5 group-hover:animate-pulse group-hover:block group-hover:ml-14 group-hover:bg-blue-900 rounded-lg p-2 text-yellow-300 font-semibold text-center shadow-lg`}
              >
                {Menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
