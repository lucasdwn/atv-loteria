import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Ball from '../../components/Ball';
import { Jogo, TipoJogo } from '../../interfaces/ILoteria';
import useLoteriaData from '../../hooks/useLoteriaData';

interface LoteriaProps {
    jogo: TipoJogo;
}

const LoteriaScreen: React.FC<LoteriaProps> = ({ jogo }) => {
    const { data, isLoading, error } = useLoteriaData();
    const [jogoData, setJogoData] = useState<Jogo | null>(null);
    const [background, setBackground] = useState<string>('');
    const [color, setColor] = useState<string>('');

    useEffect(() => {
        if (data) {
            switch (jogo) {
                case TipoJogo.MEGASENA:
                    setJogoData(data.megasena);
                    setBackground('#209869');
                    setColor('#fff');
                    break;
                case TipoJogo.QUINA:
                    setJogoData(data.quina);
                    setBackground('#260085');
                    setColor('#fff');
                    break;
                case TipoJogo.TIMEMANIA:
                    setJogoData(data.timemania);
                    setBackground('#FFF600');
                    setColor('#049645');
                    break;
                default:
                    break;
            }
        }
    }, [data, jogo]);

    if (isLoading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Carregando resultados...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    const dezenas = jogoData?.dezenas;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>{jogo}</Text>
            <View style={styles.dezenas}>
                {dezenas?.map((dezena, index) => (
                    <View key={index}>
                        <Ball background={background} color={color} numero={dezena} />
                    </View>
                ))}
            </View>
            <Text>{jogoData?.dataPorExtenso}</Text>
            <Text>
                <Text style={styles.weight}>Concurso: </Text>
                {jogoData?.numeroDoConcurso}
            </Text>
            <StatusBar style="auto" />
        </View>
    );
};

export default LoteriaScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dezenas: {
        width: '100%',
        marginTop: 3,
        marginBottom: 3,
        paddingHorizontal: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap', 
        maxHeight: 100, 
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    weight: {
        fontWeight: 'bold',
    }
});
