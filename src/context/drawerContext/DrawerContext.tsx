import {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactNode,
} from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

type Props = {
  children: ReactNode;
};

const DrawerContext = createContext({} as IDrawerContextData);

// Custom Hook

export const DrawerProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldisDrawerOpen) => !oldisDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
export const useDrawerContext = () => useContext(DrawerContext);
