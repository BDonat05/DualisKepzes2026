import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SimpleListScreen from "./screens/SimpleListScreen/SimpleListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ArticleDetailsScreen from "./screens/ArticleDetailsScreen/ArticleDetailsScreen";
import ArticleListScreen from "./screens/ArticleListScreen/ArticleListScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ArticleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ArticleList"
        component={ArticleListScreen}
        options={{ title: "Bejegyzesek" }}
      />
      <Stack.Screen
        name="ArticleDetail"
        component={ArticleDetailsScreen}
        options={{ title: "Reszletek" }}
      />
    </Stack.Navigator>
  );
}

function SimpleListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SimpleListScreen"
        component={SimpleListScreen}
        options={{ title: "Egyszeru lista" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="ArticlesTab"
          component={ArticleStack}
          options={{
            tabBarLabel: "Bejegyzesek",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="article" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SimpleListTab"
          component={SimpleListStack}
          options={{
            tabBarLabel: "Egyszeru lista",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="book" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
