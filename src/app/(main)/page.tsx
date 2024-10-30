"use client";

import { Fragment } from "react";

import { Button } from "@/packages/ui/components/ui/button";

export default function Page() {
    return (
        <Fragment>
            <section className="w-full py-28 flex justify-center items-center">
                <div className="max-w-xs flex flex-col gap-7 text-center">
                    <h1 className="text-4xl font-extrabold">
                        Pinoys' Gateway to Hackathon Opportunities
                    </h1>
                    <p className="text-muted-foreground tracking-wider leading-tight">
                        HackPH makes sure you never miss out on an opportunity.
                        With us, you're just one click away from your next
                        hackathon experience.
                    </p>
                    <div className="w-full flex flex-row gap-5 justify-center items-center pt-4">
                        <Button className="w-32">Browse</Button>
                        <Button className="w-32" variant={"outline"}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
