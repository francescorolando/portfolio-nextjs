"use client";

import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

// components
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const links = [
    {
        name: "HOME",
        path: "/",
    },
    {
        name: "SERVICES",
        path: "/services",
    },
    {
        name: "RESUME",
        path: "/resume",
    },
    {
        name: "WORK",
        path: "/work",
    },
    {
        name: "CONTACT",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                {/* modified border (original "mt-32" and "mb-40") */}
                <div className="mt-25 mb-15 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            FR
                            <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <SheetClose asChild key={index}>
                                <Link
                                    href={link.path}
                                    key={index}
                                    className={`${
                                        link.path === pathname &&
                                        "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all`}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
