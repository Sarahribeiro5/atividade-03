import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function Profile() {
    const [liked, setLiked] = useState(false);

    const handleLikePress = () => {
        setLiked(!liked);
        console.log('Liked state:', !liked);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/e7/5c/75/e75c75a2f0b2d7814944c4d45d68e520.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.name}>Frankie Stein</Text>
                <Text style={styles.description}>
                    Frankie Stein é uma das personagens principais de Monster High. Ela é filha do monstro Frankenstein, uma monstrinha muito inteligente e carismática.
                </Text>
                <Text style={styles.additionalInfoTitle}>Informações Adicionais</Text>
                <View style={styles.additionalInfoContainer}>
                    <Text style={styles.additionalInfo}>- <Text style={styles.bold}>Idade:</Text> 15 dias</Text>
                    <Text style={styles.additionalInfo}>- <Text style={styles.bold}>Origem:</Text> Alemã</Text>
                    <Text style={styles.additionalInfo}>- <Text style={styles.bold}>Cargo:</Text> Estudante</Text>
                </View>
            </ScrollView>
            <IconButton
                icon={liked ? "heart" : "heart-outline"}
                iconColor={liked ? "#39FF14" : "white"}
                size={30}
                style={styles.likeButton}
                onPress={handleLikePress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: '#39FF14',
        borderWidth: 2,
    },
    name: {
        color: '#4b0082',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        color: '#333',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    additionalInfoTitle: {
        color: '#4b0082',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    additionalInfoContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    additionalInfo: {
        color: '#333',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    likeButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 50,
    },
});