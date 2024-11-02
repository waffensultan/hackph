"use server";

import { createClient } from "@supabase/server";

export async function signInWithEmail(email: string) {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
            // Set this to false if you do not want user to be automatically signed up
            shouldCreateUser: true,
            emailRedirectTo: "http://localhost:3000/welcome",
        },
    });
    if (error) {
        throw error;
    }
}
