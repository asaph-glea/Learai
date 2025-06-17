'use client';

import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const navItems = [
    {label: "Home", href: "/" },
    {label: "Companions", href: "/companions" },
    {label: "My journey", href: "/my-journey" },

]

const NavItems = () => {

    const pathName = usePathname();

    return (
        <nav className="flex items-center gap-5">
            {navItems.map(({label, href}) => (
                <Link href={href}
                      key={label}
                      className={cn(pathName === href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default NavItems;