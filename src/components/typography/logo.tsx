import Link from "next/link";

import { Dosis } from "next/font/google";

const dosis = Dosis({
    subsets: ["latin"],
});

type LogoProps = {
    style?: "header" | "footer";
};

export function Logo(props: LogoProps) {
    return (
        <Link href="/">
            <h1
                className={`${dosis.className} tracking-wide text-5xl ${
                    props.style === "footer"
                        ? "text-secondary-foreground"
                        : "text-primary"
                }`}
            >
                HackPH
            </h1>
        </Link>
    );
}
