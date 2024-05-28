import { Text, Button, View } from 'react-native';
import { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const MaterialTopTab = createMaterialTopTabNavigator();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      <MaterialTopTab.Navigator tabBarPosition="bottom" screenOptions={{ tabBarStyle: { paddingBottom: 20 } }}>
        {!authenticated ? (
          <>
            <MaterialTopTab.Screen name="Login Screen 1">
              {(props) => <LoginScreen {...props} setAuthenticated={setAuthenticated} />}
            </MaterialTopTab.Screen>
            <MaterialTopTab.Screen name="Login Screen 2">
              {(props) => <LoginScreen {...props} setAuthenticated={setAuthenticated} />}
            </MaterialTopTab.Screen>
          </>
        ) : (
          <>
            <MaterialTopTab.Screen name="Main Screen 1">
              {(props) => <MainScreen {...props} setAuthenticated={setAuthenticated} />}
            </MaterialTopTab.Screen>
            <MaterialTopTab.Screen name="Main Screen 2">
              {(props) => <MainScreen {...props} setAuthenticated={setAuthenticated} />}
            </MaterialTopTab.Screen>
          </>
        )}
      </MaterialTopTab.Navigator>
    </NavigationContainer>
  );
}

const LoginScreen = ({ setAuthenticated }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Log in" onPress={() => setAuthenticated((prev) => !prev)} />
    </View>
  );
};

const MainScreen = ({ setAuthenticated }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen!</Text>
      <Button title="Log out" onPress={() => setAuthenticated((prev) => !prev)} />
    </View>
  );
};
