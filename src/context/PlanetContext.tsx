import { createContext } from 'react';
import { PlanetsContextType } from '../utils/types';

const GlobalContext = createContext({} as PlanetsContextType);
export default GlobalContext;
