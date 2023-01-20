import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';

import { Image, Text, Button, TouchableOpacity, StyleSheet, SafeAreaView, View } from 'react-native';

import LoginScreen from "./screens/LoginScreen";
import Esports from "./screens/Esports";
import Game from "./screens/Games";
import Note from "./screens/Note";
import Home from "./screens/Home";
import AddContent from "./screens/AddContent";
import Lol from "./screens/GameSceens/Lol";
import Profile from "./screens/Profile";


const Stack = createNativeStackNavigator();

function ProfileLogo() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("./assets/images/profile_pocetna.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}


function EsportsLogo() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("./assets/images/profile_esports.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}



function GameNewsLogo() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("./assets/images/profile_gamenews.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}



function NotesLogo() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("./assets/images/profile_notes.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}





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
          options={{
            title: "Sportee",
            headerTintColor: "#000922",
            headerStyle: {
              backgroundColor: '#8723ba',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (<ProfileLogo/>),
          }}
        />
        <Stack.Screen
          name="Esports"
          component={Esports}
          options={{
            title: "E-sports",
            headerTintColor: '#4d64ff',
            headerStyle: {
              backgroundColor: '#0c155b',
            },
            headerRight: () => (<EsportsLogo />),
          }}
        />
        <Stack.Screen
          name="AddContent"
          component={AddContent}
          options={{
            title: "E-sports",
            headerTintColor: '#4d64ff',
            headerStyle: {
              backgroundColor: '#0c155b',
            },
            headerRight: () => (<EsportsLogo />),
          }}
        />
        <Stack.Screen
          name="Games"
          component={Game}
          options={{
            headerRight: () => (<GameNewsLogo />),
            title: "Game news",
            headerTintColor: '#9650e9',
            headerStyle: {
              backgroundColor: '#320849',
            },
          }}
        />
        <Stack.Screen
          name="Note"
          component={Note}
          options={{
            title: "Notes",
            headerTintColor: '#adbfdb',
            headerStyle: {
              backgroundColor: '#081830',
            },
            headerRight: () => (<NotesLogo />),
          }}
        />
        <Stack.Screen
          name="Lol"
          component={Lol}
          options={{
            title: "League of Legends",
            headerTintColor: '#4156e9',
            headerStyle: {
              backgroundColor: '#0c155b',
            },
            headerRight: () => (<EsportsLogo/>),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: "false",
            title: 'Profile',
            headerTitleAlign: 'center',
            headerTintColor: '#d7d7d7',
            headerStyle: {
              backgroundColor: '#060b30',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



