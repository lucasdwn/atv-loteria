export default interface ILoteria {
    megasena: Jogo;
    quina: Jogo;
    timemania: Jogo;
}

interface Jogo {
    dataApuracao: string;
    dataPorExtenso: string;
    dezenas: string[];
    numeroDoConcurso: number;
}