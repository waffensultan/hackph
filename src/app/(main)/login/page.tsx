"use client";

import { useState } from "react";

import { signInWithEmail } from "./action";

import { WandSparkles as WandIcon, Quote as QuoteIcon } from "lucide-react";

import ShineBorder from "@/packages/ui/components/ui/shine-border";
import { Input } from "@/packages/ui/components/ui/input";
import { Label } from "@/packages/ui/components/ui/label";

type AuthStatus = "error" | "success";

export default function Page() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<undefined | AuthStatus>(undefined);

    const handleSubmit = async () => {
        setLoading(true);

        try {
            await signInWithEmail(email!);
            setStatus("success");
        } catch (error) {
            setStatus("error");

            const timeout = setTimeout(() => {
                setStatus(undefined);
            }, 2000);
            return () => clearTimeout(timeout);
        } finally {
            setLoading(false);
        }
    };

    const styling = {
        button:
            status === "success"
                ? "bg-green-500 pointer-events-none opacity-80"
                : status === "error"
                ? "bg-red-500"
                : "bg-primary",
        text:
            status === "success"
                ? "Success! Please check your email."
                : status === "error"
                ? "Error! Try again."
                : "Send Magic Link",
        border:
            status === "success"
                ? "border-green-500 shadow-green-700"
                : status === "error"
                ? "border-red-500 shadow-red-700"
                : "border-primary shadow-primary",
    };

    const emailIsValid = email.length > 4;

    return (
        <main className="flex flex-col gap-5 justify-center items-center pt-28">
            <h1 className="text-2xl font-semibold">
                🎉 We're glad to be having you!
            </h1>
            <ShineBorder
                className={`relative flex flex-col gap-3 transition duration-150 border ${
                    emailIsValid ? "shadow-xl" : "shadow-md"
                } ${styling.border} rounded-[var(--radius)] py-14 px-8 md:p-14`}
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
                    <button
                        onClick={() => handleSubmit()}
                        disabled={!emailIsValid || loading}
                        className={`${styling.button} mt-2 text-primary-foreground flex items-center justify-center gap-3 py-2 rounded-[var(--radius)] transition duration-150 disabled:pointer-events-none disabled:opacity-50`}
                    >
                        {!status && <WandIcon />}
                        <span className="text-lg">{styling.text}</span>
                    </button>
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
