import ButtonGeneric from "@/utils/components/button-generic";
import LabelInput from "@/utils/components/label-input";
import { useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  const { register } = useForm();
  return (
    <View style={styles.container}>
      <Image source={require("@/utils/assets/images/letreiro.png")} />
      <View
        style={{
          width: "100%",
          display: "flex",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LabelInput
          {...register("login")}
          id="Login"
          placeholder="Digite seu CPF"
          keyboardType="numeric"
        />
        <LabelInput
          {...register("senha")}
          id="Senha"
          placeholder="Digite sua Senha"
          textContentType="password"
          secureTextEntry
        />
      </View>
      <ButtonGeneric variant="default" text="Entrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    gap: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
