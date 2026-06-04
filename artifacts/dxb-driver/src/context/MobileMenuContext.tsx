import { createContext, useContext, useState } from "react";

interface MobileMenuContextValue {
  isMenuOpen: boolean;
  setIsMenuOpen: (v: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextValue>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}
