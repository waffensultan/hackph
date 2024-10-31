import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MainLayout({ children}: { children: React.ReactNode }) {
    return (
        <main>
            <Navigation />
            {children}
            <Footer />
        </main>
    )
}