import React from 'react';
import LoteriaScreen from '../../components/LoteriaScreen';
import { TipoJogo } from '../../interfaces/ILoteria';

const TimeManiaScreen: React.FC = () => {
    return (
        <LoteriaScreen jogo={TipoJogo.TIMEMANIA} />
    );
};

export default TimeManiaScreen;
