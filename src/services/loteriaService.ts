export const buscarResultadosRecentes = async () => {
    try {
        const response = await fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados', {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar resultados:', error);
        throw error;
    }
};
