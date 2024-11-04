export default interface ILoteria {
    megasena: Jogo;
    quina: Jogo;
    timemania: Jogo;
}

export interface Jogo {
    dataApuracao: string;
    dataPorExtenso: string;
    dezenas: string[];
    numeroDoConcurso: number;
}

export enum TipoJogo {
    MEGASENA = 'MEGA-SENA',
    QUINA = 'QUINA',
    TIMEMANIA = 'TIMEMANIA',
  }