import { Menu as MenuIcon } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/packages/ui/components/ui/dropdown-menu";

import { Dosis } from "next/font/google";

const dosis = Dosis({
    subsets: ["latin"],
});

export function Navigation() {
    const navLinks = ["Browse Hackathons", "Developers", "Contact"];

    return (
        <nav className="border-b border-primary p-5">
            <li className="w-full flex flex-row items-center">
                <ul>
                    <h1 className={`${dosis.className} text-5xl text-primary`}>
                        HackPH
                    </h1>
                </ul>
                <ul className="ml-auto flex flex-row items-center gap-8 font-semibold text-muted-foreground tracking-wide">
                    {navLinks.map((link) => (
                        <span
                            key={link}
                            className="max-md:hidden md:visible cursor-pointer transition duration-150 hover:text-primary"
                        >
                            {link}
                        </span>
                    ))}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="visible md:hidden focus:outline-none bg-primary p-2">
                            <MenuIcon />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-3">
                            {navLinks.map((link) => (
                                <DropdownMenuItem
                                    key={link}
                                    className="focus:text-primary"
                                >
                                    <span>{link}</span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ul>
            </li>
        </nav>
    );
}
