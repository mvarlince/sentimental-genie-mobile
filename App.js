import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Welcome from './src/components/Welcome';
import Main from './src/components/Main';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="auto"/>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
              name = "Home"
              component = {Welcome}/>

            <Stack.Screen 
              name= "Main"
              component={Main}
              options={{ title: 'Get Started' }}
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

/*
    <View style={styles.container}>
      <Text>Sentimental Genie</Text>
      <StatusBar style="auto" />
    </View>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
