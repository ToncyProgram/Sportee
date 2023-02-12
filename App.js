import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import React, { useState, createContext, useContext, useEffect } from "react";
import { async } from '@firebase/util';
import { Image, Text, Button, TouchableOpacity, StyleSheet, SafeAreaView, View, ActivityIndicator } from 'react-native';

import LoginScreen from "./screens/LoginScreen";
import Esports from "./screens/Esports";
import Game from "./screens/Games";
import Note from "./screens/Note";
import Home from "./screens/Home";
import AddContent from "./screens/AddContent";
import Lol from "./screens/GameSceens/Lol";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";

import MySpace from './screens/MySpace';

const auth = getAuth();

const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});
const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={[user, setUser]}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}

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


function MySpaceLogo() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("./assets/profile_myspace.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

function ScreensStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={
          { headerShown: false }
        }
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
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
          headerRight: () => (<ProfileLogo />),
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
          headerRight: () => (<EsportsLogo />),
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
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'My Space - Friends Chat',
          headerTintColor: '#060b30',
          headerStyle: {
            backgroundColor: '#46b0fb',
          },
          headerRight: () => (<MySpaceLogo />)
        }}
      />
      <Stack.Screen
        name="MySpace"
        component={MySpace}
        options={{
          title: 'My Space',
          headerTintColor: '#060b30',
          headerStyle: {
            backgroundColor: '#46b0fb',
          },
          headerRight: () => (<MySpaceLogo />)
        }}
      />
    </Stack.Navigator>
  )
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <ScreensStack />
    </NavigationContainer>
  )
}

function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>

  );
}

export default App;



