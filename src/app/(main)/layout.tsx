import { Fragment } from "react";

import { createClient } from "@supabase/server";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <Fragment>
            <Navigation user={user} />
            {children}
            <Footer />
        </Fragment>
    );
}
