"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@ui/dialog";
import Bar3Icon from "@icons/Bars3Icon.svg";
import XMarkIcon from "@icons/XMarkIcon.svg";
import Logo from "@images/Logo.svg";

const navigation = [
  { name: "Docs", href: "#" },
  { name: "Branding", href: "#" },
  { name: "Github", href: "#" },
  { name: "Xssethub Pay", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9999] flex w-full items-center justify-center bg-[#fffc] backdrop-blur">
      <nav
        aria-label="Global"
        className="flex w-full max-w-1440 items-center justify-between ~px-[1rem]/[6.875rem] ~py-6/4"
      >
        <div className="flex items-center ~h-[1.5rem]/14 lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="XssetHub-Logo" src={Logo} className="h-6 w-auto" />
          </a>
        </div>
        <div className="hidden items-center ~h-[1.5rem]/14 lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DialogTrigger asChild>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <img src={Bar3Icon} alt="Icon" className="size-6" />
              </button>
            </div>
          </DialogTrigger>
          <DialogContent
            hideClose
            className="z-[9999] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={Logo} className="h-6 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <img src={XMarkIcon} className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
