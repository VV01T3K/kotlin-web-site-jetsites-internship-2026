import { createCookie } from "react-router";

export const testimonialOrderCookie = createCookie(
  "kotlin-testimonials-order",
  {
    maxAge: 31_536_000,
    path: "/",
    sameSite: "lax",
  }
);
