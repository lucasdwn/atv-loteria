import React, { createContext, useContext, useEffect, useState } from 'react';
import { buscarResultadosRecentes } from '../services/loteriaService';
import ILoteria from '../interfaces/ILoteria';

interface LoteriaContextData {
  results: ILoteria | null;
  loading: boolean;
  error: string | null;
}

export const LoteriaContext = createContext<LoteriaContextData | undefined>(undefined);

export const LoteriaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await buscarResultadosRecentes();
        setResults(data);
      } catch (err) {
        setError('Falha ao buscar resultados');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <LoteriaContext.Provider value={{ results, loading, error }}>
      {children}
    </LoteriaContext.Provider>
  );
};
