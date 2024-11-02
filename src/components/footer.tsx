import { Logo } from "./typography/logo";

import { Rhodium_Libre } from "next/font/google";

const rhodiumLibre = Rhodium_Libre({
    weight: "400",
    subsets: ["latin"],
});

export function Footer() {
    return (
        <footer id="footer-section" className="pt-[40rem]">
            <section className="bg-primary w-full p-5 md:py-8 md:px-20">
                <ul className="flex flex-col justify-start">
                    <li className="flex flex-col justify-start gap-5 max-w-xs">
                        <div className="flex flex-row items-end gap-2">
                            <Logo style="footer" />
                            <span className="italic">@ 2024</span>
                        </div>
                        <h2
                            className={`${rhodiumLibre.className} text-2xl font-semibold`}
                        >
                            Pinoys' Gateway to Tech Opportunities
                        </h2>
                    </li>
                    <div className="w-full h-0.5 bg-primary-foreground rounded-[var(--radius)] my-10 md:hidden" />
                </ul>
            </section>
            <section className="bg-secondary text-primary-foreground py-3 px-5 flex items-center">
                <span>© 2024 HackPH. All rights reserved.</span>
            </section>
        </footer>
    );
}
