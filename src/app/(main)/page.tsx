"use client";

import { Fragment } from "react";

import { Button } from "@/packages/ui/components/ui/button";
import { DeveloperCard } from "@/components/developer-card";

export default function Page() {
    return (
        <Fragment>
            {/* HERO */}
            <section className="w-full py-28 flex justify-center items-center">
                <div className="max-w-xs flex flex-col gap-7 text-center md:gap-16 md:max-w-4xl">
                    <h1 className="text-4xl font-extrabold md:text-6xl">
                        Pinoys' Gateway to Hackathon Opportunities
                    </h1>
                    <p className="text-muted-foreground tracking-wider leading-tight md:text-2xl">
                        HackPH makes sure you never miss out on an opportunity.
                        With curated lists and real-time updates, with us,
                        you're just one click away from your next hackathon
                        experience.
                    </p>
                    <div className="w-full flex flex-row gap-5 justify-center items-center max-md:pt-4 md:gap-14">
                        <Button className="w-32 font-semibold md:text-2xl md:w-64 md:py-6">
                            <span>Browse</span>
                        </Button>
                        <Button
                            className="w-32 group md:text-2xl md:w-64 md:py-6"
                            variant={"outline"}
                        >
                            <span className="text-muted-foreground transition duration-150 group-hover:text-foreground">
                                Learn More
                            </span>
                        </Button>
                    </div>
                </div>
            </section>

            {/* WHY JOIN HACKATHONS */}
            <section className="px-4 flex flex-col gap-3 md:px-16 md:pt-44 md:gap-8">
                <h1 className="font-extrabold text-3xl md:text-5xl">
                    Why Join Hackathons?
                </h1>
                <p className="text-muted-foreground md:text-2xl md:tracking-wider md:max-w-6xl">
                    Hackathons are where ideas come to life and connections are
                    made!
                    <br />
                    <br />
                    HackPH connects you to the latest hackathons across the
                    Philippines, tailored to your interests and goals. Did we
                    mention that everything is completely free and our code is
                    open-source?
                </p>
            </section>

            {/* MEET THE DEVELOPERS */}
            <section
                id="developers"
                className="relative w-full flex flex-col justify-center items-center gap-16 pt-44 pb-14 max-md:px-7"
            >
                <h1 className="font-extrabold bg-gradient-to-r from-purple-800 via-purple-500 to-purple-800 text-transparent bg-clip-text text-6xl tracking-wide text-center md:text-7xl">
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
