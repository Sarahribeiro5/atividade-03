import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function News() {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://wallpapers.com/images/hd/monster-high-1500-x-900-wallpaper-kla8dk1osdc2f4ih.jpg' }} 
                style={styles.image} 
            />
            <Text style={styles.title}>Melhor desenho do mundo</Text>
            <Text style={styles.content}>
                Venha explorar o universo de Monster High! Um jogo reinventado de mundo aberto da Rockstar Games, Red Dead Redemption 2, agora para PC. Com novos conteúdos para a história, melhorias visuais e técnicas, além de novas atualizações de recursos para o modo de história e o Red Dead Online.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        padding: 20,
    },
    title: {
        color: '#4b0082',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    content: {
        color: '#333',
        fontSize: 16,
        textAlign: 'justify',
        width: '90%',
        marginBottom: 20,
    },
});