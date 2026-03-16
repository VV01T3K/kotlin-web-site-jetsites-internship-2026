import { useEffect, useRef, useState } from "react";

type ScrollbarSize = {
  height: number;
  width: number;
};

export default function useScrollbarSize(): ScrollbarSize {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<ScrollbarSize>({ height: 0, width: 0 });

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return;
    }

    const getElement = () => {
      if (!elementRef.current) {
        const element = document.createElement("div");
        element.style.width = "99px";
        element.style.height = "99px";
        element.style.overflow = "scroll";
        element.style.position = "absolute";
        element.style.top = "-9999px";
        element.setAttribute("aria-hidden", "true");
        element.setAttribute("role", "presentation");
        elementRef.current = element;
      }

      return elementRef.current;
    };

    let frame = 0;

    const updateSize = () => {
      const element = getElement();
      const next = {
        height: element.offsetHeight - element.clientHeight,
        width: element.offsetWidth - element.clientWidth,
      };

      setSize((current) =>
        current.height !== next.height || current.width !== next.width
          ? next
          : current,
      );
    };

    const handleResize = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateSize);
    };

    const element = getElement();
    document.body.appendChild(element);
    updateSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);

  return size;
}
