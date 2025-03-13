import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#000000", 
                tabBarInactiveTintColor: "#FFFFFF", 
                tabBarStyle: {
                    backgroundColor: "#e44b8d", 
                    borderTopWidth: 1,
                    borderTopColor: "#000000",
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#e44b8d', 
                },
                headerTintColor: '#000000',
            }}
            >
            <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }}
            />
            <Tabs.Screen
            name="profile"
            options={{
                title: "Perfil",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                ),
            }}
            />
            <Tabs.Screen
            name="news"
            options={{
                title: "Notícias",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="newspaper" size={size} color={color}/>
                ),
            }}
            />
        </Tabs>
    );
}