"use server";

import { currentUser } from "@clerk/nextjs";
import { StreamClient } from "@stream-io/node-sdk";
import { error } from "console";

export async function getToken() {
  const streamApiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
  const streamApiSecret = process.env.STREAM_VIDEO_API_SECRET;

  if (!streamApiKey || !streamApiSecret) {
    throw new Error("Stream Api key or secret not set");
  }

  const user = await currentUser();

  console.log("Generating token for user: ", user?.id);

  if (!user) {
    throw new Error("User not authenticated");
  }

  const streamClient = new StreamClient(streamApiKey, streamApiSecret);

  const expirationTime = Math.floor(Date.now() / 100) + 60 * 60;

  const issuedAt = Math.floor(Date.now() / 1000) - 600;

  const token = streamClient.createToken(user.id, expirationTime, issuedAt);

  console.log("Token successfully created: ", token);

  return token;
}
