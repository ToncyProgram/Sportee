import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./screens/LoginScreen";
import Esports from "./screens/Esports";
import Sports from "./screens/Sports";
import Game from "./screens/Games";
import Note from "./screens/Note";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen
          name="Home"
          component={Home}
          />
        <Stack.Screen
          name="Esports"
          component={Esports} />
        <Stack.Screen
          name="Sports"
          component={Sports} />
        <Stack.Screen
          name="Games"
          component={Game} />
        <Stack.Screen
          name="Note"
          component={Note}
          options={{
            title: "Notes",
            headerTintColor: 'black',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


