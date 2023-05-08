import { View, Text, TouchableOpacity } from "react-native";

export default function Welcome({navigation}) {
  const handleGetStarted = () => {
    navigation.navigate("Main");
  };

  return (
    <View>
      <Text>
        Welcome to Sentimental Genie Sentimental Genie is a full stack web app
        that uses OpenAI's GPT-3 AI model to generate a response based on the
        user's input.
      </Text>
      <TouchableOpacity onPress={handleGetStarted}>
        <View>
          <Text>GET STARTED</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
