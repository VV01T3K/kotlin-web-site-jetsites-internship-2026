import { createCookie } from "react-router";

export const testimonialOrderCookie = createCookie("kotlin-testimonials-order", {
  maxAge: 3600,
  path: "/",
  sameSite: "lax",
});
