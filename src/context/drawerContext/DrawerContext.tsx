import Loader from 'components/loader/Loader';
import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  ReactNode,
} from 'react';

import { ProdutosService } from 'services/api/axios-config/produtos/ProdutosService';

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
    label: 'Página inicial',
    icon: 'home',
    path: '/home',
  },
  {
    label: 'Categorias',
    icon: 'menu',
    path: '/categorias',
  },
];

// Custom Hook
export const DrawerProvider = ({ children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>();

  // Requisição das categorias

  const getCategorias = useCallback(() => {
    setLoading(true);
    ProdutosService.getAllCategories()
      .then((res) => {
        if (res instanceof Error) {
          alert(res.message);
        } else {
          const temp = res.map((categoria) => {
            return {
              label: categoria,
              icon: '',
              path: `/categorias/${categoria}`,
            };
          });
          setDrawerOptions([...defaultMenu, ...temp]);
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
