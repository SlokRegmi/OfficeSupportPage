import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AppContextType {
  top: boolean;
  setTop: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
let newtop = false;

interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [top, setTop] = useState(false);

  useEffect(() => {
    // check scrolled index
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY > 210;
      // find window height
      // const windowHeight = window.innerHeight;
      if (isTop !== newtop) {
        newtop = isTop;
        setTop(isTop)
      };
    });
  }, []);

  const sharedState: AppContextType = { top, setTop };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within AppWrapper');
  }
  return context;
}
