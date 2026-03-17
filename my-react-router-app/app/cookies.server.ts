import { createCookie } from "react-router";

export const testimonialOrderCookie = createCookie(
  "kotlin-testimonials-order",
  {
    path: "/",
    maxAge: 31_536_000,
    sameSite: "lax",
  },
);
