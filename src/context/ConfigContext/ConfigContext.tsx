import { createContext, ReactNode, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export type ConfigContext = {
  menuAtivo: string;
  setMenuAtivo: (menu: string) => void;
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const ConfigContextType = createContext<ConfigContext>({} as ConfigContext);

const ConfigProvider = ({ children }: Props) => {
  const [menuAtivo, setMenuAtivo] = useState("");
  const [openMenu, setOpenMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  const provider = {
    menuAtivo: menuAtivo,
    setMenuAtivo: setMenuAtivo,
    openMenu: openMenu,
    setOpenMenu: setOpenMenu,
    loading: loading,
    setLoading: setLoading,
  };

  return (
    <ConfigContextType.Provider value={provider}>
      {children}
    </ConfigContextType.Provider>
  );
};

export default ConfigProvider;

export const useConfig = () => useContext(ConfigContextType);
