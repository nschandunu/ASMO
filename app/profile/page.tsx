import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ProfileClient from "./profile-client";

export default async function ProfilePage() {
  const supabase = await createClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/login");
  }

  // Fetch profile from the 'profiles' table
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return <ProfileClient user={user} initialProfile={profile} />;
}