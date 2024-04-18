import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-poiner sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={42}
              height={42}
              alt="Zoom logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden">
              Zoom
            </p>
          </Link>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
