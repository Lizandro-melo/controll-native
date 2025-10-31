import { Pressable, Text } from "react-native";

type ButtonGenericProps = {
  variant: "default" | "denied" | "link";
  text: string;
};

export default function ButtonGeneric({ ...props }: ButtonGenericProps) {
  return (
    <>
      {props.variant === "default" && (
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: "#282f3d",
              paddingHorizontal: 50,
              paddingVertical: 10,
              borderRadius: 10,
              
            },
          ]}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {props.text}
          </Text>
        </Pressable>
      )}
    </>
  );
}
