"use client";

import { Instagram as InstagramIcon, Github as GithubIcon } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/packages/ui/components/ui/avatar";

type DeveloperCardProps = {
    name: string;
    position: string;
    introduction: string;
    image: {
        src: string;
        alt: string;
    };
    handles: Record<SocialMediaHandles, string>;
};

type SocialMediaHandles = "github" | "linkedin" | "instagram";

export function DeveloperCard(props: DeveloperCardProps) {
    return (
        <article className="self-center border rounded-[var(--radius)] py-10 px-7 max-w-xs flex flex-col bg-card lg:px-10">
            <Avatar className="self-center w-32 h-32 md:w-36 md:h-36">
                <AvatarImage {...props.image} />
                <AvatarFallback>Waffen</AvatarFallback>
            </Avatar>
            <header className="w-full flex flex-col gap-1 py-5 justify-center items-center">
                <h1 className="text-3xl font-bold">{props.name}</h1>
                <h3 className="text-muted-foreground font-light">
                    {props.position}
                </h3>
            </header>
            <p className="text-sm leading-tight w-full">{props.introduction}</p>
            <footer className="pt-10 flex flex-row justify-center items-center gap-5 text-blue-500 tracking-wider text-sm">
                {Object.keys(props.handles).map((handle) => (
                    <a
                        key={props.handles[handle as SocialMediaHandles]}
                        href={props.handles[handle as SocialMediaHandles]}
                        target="_blank"
                        rel="noopener"
                    >
                        <span>{handle}</span>
                    </a>
                ))}
            </footer>
        </article>
    );
}
