import { Poppins, Khula, Rhodium_Libre } from "next/font/google";

import { Button } from "@/packages/ui/components/ui/button";
import Link from "next/link";

const poppinsBold = Poppins({
    weight: "700",
    subsets: ["latin"],
});

const khula = Khula({
    weight: "400",
    subsets: ["latin"],
});

const rhodiumLibre = Rhodium_Libre({
    weight: "400",
    subsets: ["latin"],
});

// If a user is already authenticated, they shouldn't be redirected to welcome page again
// Check if a user has already seen the welcome page (created an account before and whatnot)

type WhyHackPHContent = {
    title: string;
    content: string;
    icon: any;
};

export default function Page() {
    const whyHackPH: WhyHackPHContent[] = [
        {
            title: "One-Stop Access to Local Tech Events",
            content:
                "Find hackathons, workshops, and meetups across the Philippines in one convenient place.",
            icon: "",
        },
        {
            title: "Direct Event Registration",
            content:
                "Seamless links to sign up for events without extra steps.",
            icon: "",
        },
        {
            title: "Community & Networking Opportunities",
            content:
                "Connect with fellow tech enthusiasts and professionals at each event provided to you by HackPH.",
            icon: "",
        },
    ];

    return (
        <section className="w-full pt-32 flex justify-center">
            <div className="w-full max-w-xs md:max-w-xl flex flex-col">
                <section className="flex flex-col">
                    <h1
                        className={`${poppinsBold.className} w-full bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800 text-transparent bg-clip-text text-2xl text-center md:text-4xl`}
                    >
                        Welcome to HackPH!
                    </h1>
                    <div className="w-full flex flex-row gap-8 justify-center items-center pt-5">
                        <Button asChild className="w-28 md:w-32">
                            <Link href="/explore">
                                <span className="font-semibold">
                                    Find Events
                                </span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="w-28 md:w-32"
                            variant={"outline"}
                        >
                            <Link href="/">
                                <span className="text-muted-foreground">
                                    Home
                                </span>
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* WHY US */}
                <section className="w-full flex flex-col pt-24">
                    <h1 className={`${rhodiumLibre.className} text-3xl`}>
                        Why HackPH?
                    </h1>
                    <ul className="flex flex-col gap-8 pt-3">
                        {whyHackPH.map((prop) => (
                            <ul key={prop.title} className="flex flex-col gap-2">
                                <h1 className={`${poppinsBold.className} text-xl tracking-wide leading-tight`}>{prop.title}</h1>
                                <p className={`${khula.className} text-foreground`}>{prop.content}</p>
                            </ul>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
}
