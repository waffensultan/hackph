"use client";

import { Fragment } from "react";

import Link from "next/link";

import { Button } from "@/packages/ui/components/ui/button";
import { DeveloperCard } from "@/components/developer-card";

import { Rhodium_Libre, Khula, Poppins } from "next/font/google";

const rhodiumLibre = Rhodium_Libre({
    weight: "400",
    subsets: ["latin"],
});

const khula = Khula({
    weight: "400",
    subsets: ["latin"],
});

const poppinsBold = Poppins({
    weight: "700",
    subsets: ["latin"],
});

export default function Page() {
    return (
        <Fragment>
            {/* HERO */}
            <section className="w-full py-28 flex justify-center items-center">
                <div className="max-w-xs flex flex-col gap-7 text-center md:gap-16 md:max-w-4xl">
                    <h1
                        className={`${rhodiumLibre.className} text-4xl font-extrabold md:text-6xl`}
                    >
                        Pinoys' Gateway to Tech Opportunities
                    </h1>
                    <p
                        className={`${khula.className} text-muted-foreground md:text-2xl`}
                    >
                        HackPH makes sure you never miss out on an opportunity.
                        With curated lists and real-time updates, with us,
                        you're just one click away from your next tech event
                        experience.
                    </p>
                    <div className="w-full flex flex-row gap-5 justify-center items-center max-md:pt-4 md:gap-14">
                        <Button
                            asChild
                            className="w-32 font-semibold md:text-2xl md:w-64 md:py-6"
                        >
                            <Link href="/explore">
                                <span>Browse</span>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="w-32 group md:text-2xl md:w-64 md:py-6"
                            variant={"outline"}
                        >
                            <Link href="#learn-more-start">
                                <span className="text-muted-foreground transition duration-150 group-hover:text-foreground">
                                    Learn More
                                </span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* WHY JOIN HACKATHONS */}
            <section
                id="learn-more-start"
                className="px-4 flex flex-col gap-3 md:px-16 md:pt-48 md:gap-8"
            >
                <h2
                    className={`${rhodiumLibre.className} text-3xl font-extrabold md:text-5xl`}
                >
                    Why Join Tech Events?
                </h2>
                <p
                    className={`${khula.className} text-muted-foreground md:text-2xl md:max-w-4xl`}
                >
                    Tech events are where ideas come to life and connections are
                    made!
                    <br />
                    <br />
                    HackPH connects you to the latest tech events across the
                    Philippines, tailored to your interests and goals. Did we
                    mention that everything is completely free and our code is
                    open-source?
                </p>
            </section>

            {/* MEET THE DEVELOPERS */}
            <section
                id="developers-section"
                className="relative w-full flex flex-col justify-center items-center gap-14 pt-44 pb-14 max-md:px-7"
            >
                <h1
                    className={`${poppinsBold.className} bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800 text-transparent bg-clip-text text-6xl text-center md:text-7xl`}
                >
                    Meet the Team
                </h1>
                <div className="shadow-2xl shadow-primary border border-primary w-full max-w-6xl rounded-[var(--radius)] py-20 flex flex-col gap-10 flex-wrap justify-center md:flex-row">
                    <DeveloperCard
                        name="Waffen Sultan"
                        introduction="The creator of HackPH. An enthusiast of Vim in VSCode and typing blazingly fast. Did we mention that they also happen to be single? "
                        position="Lead Full-Stack Developer"
                        image={{
                            src: "https://avatars.githubusercontent.com/u/111581149?v=4",
                            alt: "waffen",
                        }}
                        handles={{
                            github: "https://github.com/waffensultan",
                            linkedin: "https://linkedin.com/wffnsltan",
                            instagram: "https://instagram.com/waff.tua",
                        }}
                    />
                </div>
            </section>
        </Fragment>
    );
}
