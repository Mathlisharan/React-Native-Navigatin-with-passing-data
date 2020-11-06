import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  Button,
  Text,
  View
} from 'react-native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'lightgreen',
        },
        headerTintColor: 'dodgerblue',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen({ navigation }) {
  let data = { name: 'Mayank Shrivastava', email: 'shrivastavamathli@gmail.com', address: 'Bhind' }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>Home Screen</Text>
      <Button onPress={() => navigation.push('Details', data)} title="Go to Details Screen"></Button>
    </View>
  )
}
function DetailsScreen({ route, navigation }) {
  console.warn(route.params)
  let data = route.params
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text style={{ fontSize: 20 }}>{data.name}</Text>
      <Text style={{ fontSize: 20 }}>{data.email}</Text>
      <Text style={{ fontSize: 20 }}>{data.address}</Text>
      <Button onPress={() => navigation.setOptions({ title: 'Custom Details' })} title="Update Title"></Button>
    </View>
  )
}
export default App;