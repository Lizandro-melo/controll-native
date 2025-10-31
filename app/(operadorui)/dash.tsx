import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Teste() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pagina de teste dentro de Operador UI</Text>
      <Button title="Voltar para a pagina principal" onPress={() => router.back()}/>
    </View>
  );
}
