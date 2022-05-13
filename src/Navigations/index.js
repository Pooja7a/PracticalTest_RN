import React from "react";
import HomeScreen from "../Container/Home"
import DetailScreen from "../Container/DetailsScreen"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Routes } from "../Configs/Routes";
const AppStack = createStackNavigator()

class RootStack extends React.Component {
    render() {
        return (
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                    ...TransitionPresets.SlideFromRightIOS,
                    headerMode: "screen"
                }}
                initialRouteName={Routes.Home}
            >
                <AppStack.Screen name={Routes.Home} component={HomeScreen} options={{ headerShown: false }} />
                <AppStack.Screen name={Routes.Details} component={DetailScreen} options={{ headerShown: false }} />
            </AppStack.Navigator>
        )
    }
}
export default RootStack