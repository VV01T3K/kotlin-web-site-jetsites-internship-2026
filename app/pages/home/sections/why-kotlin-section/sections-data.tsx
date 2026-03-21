import type { ReactNode } from "react";

export type WhyKotlinSectionItem = {
  title: ReactNode;
  description: ReactNode;
  buttonText: string;
  buttonLink: string;
} & ({ media: "youtube"; youtubeId: string } | { media: "image" });

export const sections = [
  {
    buttonLink: "/lp/server-side/",
    buttonText: "Learn more",
    description:
      "Compatible with the Java ecosystem. Use your favorite JVM frameworks and libraries.",
    media: "youtube",
    title: <>A productive way to write server-side applications</>,
    youtubeId: "8xAH7RU0Y44",
  },
  {
    buttonLink: "/docs/multiplatform.html",
    buttonText: "Learn about Kotlin Multiplatform",
    description: (
      <>
        Share application logic between web, mobile, and desktop platforms while
        keeping an experience native to users.
        <br />
        <br />
        Save time and get the benefit of unlimited access to features specific
        to these platforms.
      </>
    ),
    media: "image",
    title: "Cross-platform layer for native applications",
  },
  {
    buttonLink: "/community/",
    buttonText: "Join the community",
    description:
      "Kotlin has great support and many contributors in its fast-growing global community. Enjoy the benefits of a rich ecosystem with a wide range of community libraries. Help is never far away - consult extensive community resources or ask the Kotlin team directly.",
    media: "youtube",
    title: (
      <>
        Big, friendly and helpful
        <br />
        community
      </>
    ),
    youtubeId: "JGvk4M0Rfxo",
  },
] as const satisfies WhyKotlinSectionItem[];
