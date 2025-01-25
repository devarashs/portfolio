import React, { Suspense } from "react";

export default function SignupPage() {
  const SignupForm = React.lazy(
    () => import("@/components/SignupForm/SignupForm")
  );
  return (
    <div className="w-full">
      <Suspense>
        <SignupForm />
      </Suspense>
    </div>
  );
}
