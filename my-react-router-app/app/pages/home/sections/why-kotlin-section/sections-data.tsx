import type { ReactNode } from "react";

export type WhyKotlinSectionItem = {
  title: ReactNode;
  description: ReactNode;
  buttonText: string;
  buttonLink: string;
} & ({ media: "youtube"; youtubeId: string } | { media: "image" });

export const sections = [
  {
    title: <>A productive way to write server-side applications</>,
    description: "Compatible with the Java ecosystem. Use your favorite JVM frameworks and libraries.",
    buttonText: "Learn more",
    buttonLink: "/lp/server-side/",
    media: "youtube",
    youtubeId: "8xAH7RU0Y44",
  },
  {
    title: "Cross-platform layer for native applications",
    description: (
      <>
        Share application logic between web, mobile, and desktop platforms while keeping an
        experience native to users.
        <br />
        <br />
        Save time and get the benefit of unlimited access to features specific to these platforms.
      </>
    ),
    buttonText: "Learn about Kotlin Multiplatform",
    buttonLink: "/docs/multiplatform.html",
    media: "image",
  },
  {
    title: (
      <>
        Big, friendly and helpful
        <br />
        community
      </>
    ),
    description:
      "Kotlin has great support and many contributors in its fast-growing global community. Enjoy the benefits of a rich ecosystem with a wide range of community libraries. Help is never far away - consult extensive community resources or ask the Kotlin team directly.",
    buttonText: "Join the community",
    buttonLink: "/community/",
    media: "youtube",
    youtubeId: "JGvk4M0Rfxo",
  },
] as const satisfies WhyKotlinSectionItem[];
