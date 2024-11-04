import React from 'react';
import LoteriaScreen from '../../components/LoteriaScreen';
import { TipoJogo } from '../../interfaces/ILoteria';

const QuinaScreen: React.FC = () => {
    return (
        <LoteriaScreen jogo={TipoJogo.QUINA} />
    );
};

export default QuinaScreen;
