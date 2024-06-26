import { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

export function GenerateMetadata({ params: { id } }: PageProps): Metadata {
  return {
    title: `Meeting ${id}`,
  };
}

export default function Page({ params: { id } }: PageProps) {
  return <></>;
}
