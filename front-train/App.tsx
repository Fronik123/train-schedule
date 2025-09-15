import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/providers/auth/AuthProvider";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "@/navigation/Navigation";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import "./global.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation></Navigation>
        </SafeAreaProvider>
      </AuthProvider>

      <StatusBar style="light" />

      <Toast />
    </QueryClientProvider>
  );
}
