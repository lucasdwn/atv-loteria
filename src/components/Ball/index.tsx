import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BallProps {
    background: string;
    color: string;
    numero: string;
}

const Ball: React.FC<BallProps> = ({ background, color, numero }) => {
    return (
        <View style={[styles.ball, { backgroundColor: background }]}>
            <Text style={[styles.text, { color: color }]}>{numero}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ball: {
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Ball;
