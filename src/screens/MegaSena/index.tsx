import React from 'react';
import LoteriaScreen from '../../components/LoteriaScreen';
import { TipoJogo } from '../../interfaces/ILoteria';

const MegaSenaScreen: React.FC = () => {
    return (
        <LoteriaScreen jogo={TipoJogo.MEGASENA} />
    );
};

export default MegaSenaScreen;
