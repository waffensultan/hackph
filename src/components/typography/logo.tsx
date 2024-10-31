import { Dosis } from "next/font/google";

const dosis = Dosis({
    subsets: ["latin"],
});

type LogoProps = {
    style?: "header" | "footer";
};

export function Logo(props: LogoProps) {
    return (
        <h1
            className={`${dosis.className} text-5xl ${
                props.style === "footer"
                    ? "text-secondary-foreground"
                    : "text-primary"
            }`}
        >
            HackPH
        </h1>
    );
}
