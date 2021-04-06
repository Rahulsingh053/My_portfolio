import React from "react";

export function useReactLocationHash() {
  const [path, setPath] = React.useState(window.location.hash);
  const listenToPopstate = () => {
    setPath(window.location.hash);
  };
  React.useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  return path;
}
