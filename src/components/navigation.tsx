"use client";

import { type User } from "@supabase/supabase-js";

import { Menu as MenuIcon } from "lucide-react";

import { logout } from "@/app/(main)/action";

import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/packages/ui/components/ui/dropdown-menu";

import { Logo } from "./typography/logo";

type NavigationProps = {
    user: User | null;
};

type Links = {
    title: string;
    url: string;
};

export function Navigation({ user }: NavigationProps) {
    const navLinks: Links[] = [
        {
            title: "Explore Events",
            url: "/explore",
        },
        {
            title: "Partnerships",
            url: "/partnerships",
        },
        {
            title: "Developers",
            url: "#developers-section",
        },
        {
            title: "Contact",
            url: "#footer-section",
        },
    ];

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <nav className="border-b border-primary p-5">
            <ul className="w-full flex flex-row items-center justify-between ">
                <li>
                    <Logo style="header" />
                </li>
                <li className="flex flex-row items-center gap-8 font-semibold text-muted-foreground tracking-wide">
                    {navLinks.map((link) => (
                        <Link key={link.title} href={link.url}>
                            <span className="max-md:hidden md:visible cursor-pointer transition duration-150 hover:text-primary">
                                {link.title}
                            </span>
                        </Link>
                    ))}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="visible md:hidden focus:outline-none bg-primary p-2">
                            <MenuIcon />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-3">
                            {navLinks.map((link) => (
                                <DropdownMenuItem
                                    key={link.title}
                                    className="focus:text-primary"
                                >
                                    <Link href={link.url}>
                                        <span>{link.title}</span>
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Account</DropdownMenuLabel>
                            <DropdownMenuItem>
                                {user ? (
                                    <span
                                        onClick={() => handleLogout()}
                                        className="text-primary text-sm font-semibold tracking-tight"
                                    >
                                        Log out
                                    </span>
                                ) : (
                                    <Link href="/login">
                                        <span className="text-primary text-sm font-semibold tracking-tight">
                                            Log in
                                        </span>
                                    </Link>
                                )}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>

                <li className="hidden md:flex">
                    <Link href="/login">
                        {user ? (
                            <span className="text-primary text-xl font-semibold tracking-tight">
                                Log out
                            </span>
                        ) : (
                            <span className="text-primary text-xl font-semibold tracking-tight">
                                Log in
                            </span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
