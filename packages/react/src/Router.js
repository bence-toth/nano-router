import React, { useMemo } from "react";
import { RouterContext } from "./RouterContext";
import { Router as NanoRouter } from "@nano-router/router";
import { RouterSubscription } from "./RouterSubscription";

export const Router = ({ routes, history, children }) => {
  const router = useMemo(() => new NanoRouter({ routes, history }), [
    routes,
    history,
  ]);

  return (
    <RouterContext.Provider value={router}>
      <RouterSubscription>{children}</RouterSubscription>
    </RouterContext.Provider>
  );
};
