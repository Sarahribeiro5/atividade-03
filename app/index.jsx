import { View, Text } from "react-native";

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f8ff', padding: 30 }}>
            <Text style={{ color: '#4b0082', fontSize: 24, marginBottom: 15, fontWeight: "bold", textAlign: 'center' }}>Bem-vindo ao Monster High Hub</Text>
            <Text style={{ color: '#333', fontSize: 18, textAlign: 'center', lineHeight: 24 }}>
                Venha conhecer o universo de Monster High. Um desenho animado cheio de personagens estilosas, fofas e cativantes.
            </Text>
        </View>
    );
}