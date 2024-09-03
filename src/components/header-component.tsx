"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageChanger from "./language-changer";
import { ModeToggle } from "./mode-toggle";

function HeaderComponent() {
  return (
    <header className="w-full">
      <nav className="flex flex-row justify-between items-center w-full bg-red-700 p-6">
        <div className="bg-yellow-400">
          <a className="" href="#">
            <Image
              width={100}
              height={100}
              src="/images/logo.jpg"
              alt="logo"
              style={{ height: "60px" }}
            />
          </a>
        </div>
        <div className="flex flex-row justify-center items-center gap-10">
          <ModeToggle />
          <LanguageChanger />
          <ul className="">
            <li className="">
              <Link href="/">
                <Image
                  width={100}
                  height={100}
                  src="/images/flag.jpg"
                  alt="logo"
                  style={{ height: "60px" }}
                />
              </Link>
              <div className="nav-line"></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
