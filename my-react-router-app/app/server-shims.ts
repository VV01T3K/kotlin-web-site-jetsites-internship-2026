if (typeof window === "undefined") {
  class ServerResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  const serverWindow = {
    ResizeObserver: ServerResizeObserver,
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    navigator: { appVersion: "" },
    innerWidth: 0,
    setTimeout,
    clearTimeout,
  };

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: serverWindow,
  });

  Object.defineProperty(globalThis, "ResizeObserver", {
    configurable: true,
    value: ServerResizeObserver,
  });
}
