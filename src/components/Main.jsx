import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Main() {
  
  const [userInput, setUserInput] = useState("")
  const [response, setResponse] = useState(null)

  const handlePress = () => {
    console.log("handle userInput ", userInput)
    fetch(`https:sentimental-genie.web.app/sentiment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch(console.error);
  };

// aws amplify

  return (
    <View>
      <TextInput style={styles.input}
                value={userInput}
                placeholder="enter text"
                onChangeText={setUserInput}>
      
      </TextInput>
      <Button
      title="get sentiment analysis"
      onPress={handlePress}>
      </Button>
      <Text> Sentiment Analysis:{!response ? " " : response.choices[0].text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
      height:40,
      margin:12,
      borderWidth: 1,
      padding:10,
      borderRadius: 10
  }
})