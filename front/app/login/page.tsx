import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <Link href={"/signup"}>
        <Button>Make New Account</Button>
      </Link>
    </div>
  );
}
