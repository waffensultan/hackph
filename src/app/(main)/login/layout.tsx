import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HackPH - Sign in to your account",
    description: "Sign in to your account.",
    authors: {
        name: "Waffen Sultan",
        url: "https://github.com/waffensultan",
    },
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
