import { createContext } from 'react';
import { ContextType } from '../utils/types';

const PlanetsContext = createContext<ContextType>({} as ContextType);

export default PlanetsContext;
