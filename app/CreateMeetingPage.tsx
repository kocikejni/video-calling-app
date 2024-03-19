"use client";

import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function CreateMeetingPage() {
  const { user } = useUser();

  if (!user) {
    return <Loader2 className="mx-auto animate-spin" />;
  }
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1>Welcome {user?.username}! </h1>
    </div>
  );
}
