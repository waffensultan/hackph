"use client";

import { useState } from "react";

import { signInWithEmail } from "./action";

import { WandSparkles as WandIcon, Quote as QuoteIcon } from "lucide-react";

import ShineBorder from "@/packages/ui/components/ui/shine-border";
import { Input } from "@/packages/ui/components/ui/input";
import { Label } from "@/packages/ui/components/ui/label";
import { Button } from "@/packages/ui/components/ui/button";

export default function Page() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const emailIsValid = email.length > 4;

    const handleSubmit = async () => {
        setLoading(true);

        try {
            await signInWithEmail(email!);
        } catch (error) {
            console.log("Error authenticating:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex flex-col gap-5 justify-center items-center pt-28">
            <h1 className="text-2xl font-semibold">
                🎉 We're glad to be having you!
            </h1>
            <ShineBorder
                className={`relative flex flex-col gap-3 transition duration-150 ${
                    emailIsValid ? "shadow-xl" : "shadow-md"
                } shadow-primary border border-primary rounded-[var(--radius)] py-14 px-8 md:p-14`}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <section className="flex flex-col gap-1 w-full">
                    <Label
                        htmlFor="email"
                        className="text-md font-semibold tracking-wide"
                    >
                        Email
                    </Label>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email here..."
                    />
                    <Button
                        onClick={() => handleSubmit()}
                        disabled={!emailIsValid || loading}
                        variant={"default"}
                        className="mt-2"
                    >
                        <WandIcon />
                        <span className="text-lg">Send Magic Link</span>
                    </Button>
                </section>
                <footer className="max-w-xs mt-5 p-4 rounded-[var(--radius)] bg-muted/50 text-muted-foreground text-sm flex flex-row gap-3">
                    <div className="flex">
                        <QuoteIcon
                            size={20}
                            className="self-start rotate-180"
                        />
                    </div>
                    <span className="leading-tighter">
                        🔒 HackPH doesn't require passwords! Enter your email,
                        and we'll send you a secure link to log in.
                    </span>
                    <div className="flex">
                        <QuoteIcon size={20} className="self-end" />
                    </div>
                </footer>
            </ShineBorder>
        </main>
    );
}
