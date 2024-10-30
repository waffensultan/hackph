import type { Metadata } from "next";

import "../app/globals.css";

export const metadata: Metadata = {
    title: "HackPH - Find hackathons in the Philippines",
    authors: {
        name: "Waffen Sultan",
        url: "https://github.com/waffensultan",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
