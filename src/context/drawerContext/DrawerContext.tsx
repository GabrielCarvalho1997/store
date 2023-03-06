import Loader from "components/loader/Loader";
import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  ReactNode,
} from "react";

import { ProdutosService } from "services/api/axios-config/produtos/ProdutosService";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOption[] | undefined;
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IDrawerOption {
  icon: string;
  label: string;
  path: string;
  
}

type Props = {
  children: ReactNode;
};

const DrawerContext = createContext({} as IDrawerContextData);

const defaultMenu = [
  {
    label: "Página inicial",
    icon: "home",
    path: "/home",
    subMenu: false
  },
  {
    label: "Categorias",
    icon: "menu",
    path: "/",
    subMenu: false
  },
];

// Custom Hook
export const DrawerProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>(defaultMenu);


  // Requisição das categorias
  const getCategorias = useCallback(() => {
    setLoading(true);
  
    ProdutosService.getAllCategories()
      .then((res) => {
        if (res instanceof Error) {
          alert(res.message);
        } else {
          const icones = ["laptop","diamond","man","woman"];
          
          // Associa o ícone a cada categoria
          const menuIcones: any = res.reduce((obj: any, category, index) => {
            obj[category] = icones[index];
            return obj;
          }, {});

          const subItens = res.map((categoria) => {       
            return {
              label: categoria,
              icon: menuIcones[categoria],
              path: `/categoria/${categoria}`,
              subMenu: true
            };
          });
          setDrawerOptions([...subItens]);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // useLayoutEffect(() => {
  //   if (!isrender) {
  //   }
  // }, [isrender]);

  useEffect(() => {
    getCategorias();
  }, [getCategorias]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldisDrawerOpen) => !oldisDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOption[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {loading ? <Loader /> : children}
    </DrawerContext.Provider>
  );
};
export const useDrawerContext = () => useContext(DrawerContext);
