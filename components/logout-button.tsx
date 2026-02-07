"use client";

import { supabase } from "../lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login"); // redirect to login after logout
  };

  return <Button onClick={logout}>Logout</Button>;
}
