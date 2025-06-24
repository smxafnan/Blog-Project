import { createContext, useContext } from 'react';

type ViewType = 'grid' | 'detail';

const ViewContext = createContext<ViewType>('grid');

export const ViewProvider = ViewContext.Provider;
export const useView = () => useContext(ViewContext);