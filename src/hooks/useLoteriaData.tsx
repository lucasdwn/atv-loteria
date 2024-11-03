import { useContext, useEffect, useState } from 'react';
import ILoteria from '../interfaces/ILoteria';
import { LoteriaContext } from '../contexts/loteriaContext';

interface UseLoteriaDataResult {
    data: ILoteria | null;
    isLoading: boolean;
    error: string | null;
}

const useLoteriaData = (): UseLoteriaDataResult => {
    const context = useContext(LoteriaContext);
    const [data, setData] = useState<ILoteria | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!context) {
            setError('Contexto não encontrado');
            return;
        }

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const results = context.results;
                setData(results);
            } catch (e) {
                setError('Erro ao buscar dados');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [context]);

    return { data, isLoading, error };
};

export default useLoteriaData;
