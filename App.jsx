import { StyleSheet, Easing} from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from './src/splash/Splash'
import OnBoardSplash from './src/screencomponents/onboarding/OnBoardSplash';
import LoggIn from './src/screencomponents/loggedin/LoggIn';
import Signup from './src/screencomponents/loggedin/Signup';
import ForgetPassword from './src/screencomponents/loggedin/ForgetPassword';
import CheckYourEmail from './src/screencomponents/loggedin/CheckYourEmail';
import Successfully from './src/screencomponents/loggedin/Successfully';
 



// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.02,
      restSpeedThreshold: 0.02,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
      duration: 500,
      easing: Easing.linear,
  },
};

const customTransition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
          cardStyle: {
              transform: [
                  {
                      translateX: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.width, 0],
                      }),
                  },
                  {
                      rotate: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: ["180deg", "0deg"],
                      }),
                  },
                  {
                      scale: next
                          ? next.progress.interpolate({
                              inputRange: [0, 1],
                              outputRange: [1, 0.6],
                          })
                          : 1,
                  },
              ],
          },
          opacity: current.opacity,
      };
  },
};



const App = (props) => {
  const { navigation } = props;

  return (
    <NavigationContainer> 
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ 
          gestureEnabled: false,
          gestureDirection: "horizontal",
          transitionSpec: {
              open: config,
              close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false,
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "#000",
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: { fontSize: 16 },
        }}
      >
        <Stack.Screen name='splash' options={{headerShown:false}}>
            {(props)=><Splash {...props} />}
        </Stack.Screen> 
        <Stack.Screen name='onboard splash' options={{headerShown:false}}>
            {(props)=><OnBoardSplash {...props} />}
        </Stack.Screen> 
        <Stack.Screen name='logged in' options={{headerShown:false}}>
            {(props)=><LoggIn {...props} />}
        </Stack.Screen> 
        <Stack.Screen name='signup' options={{headerShown:false}}>
            {(props)=><Signup {...props} />}
        </Stack.Screen> 
        <Stack.Screen name='forget password' options={{headerShown:false}}>
            {(props)=><ForgetPassword {...props} />}
        </Stack.Screen> 
        <Stack.Screen name='check your email' options={{headerShown:false}}>
            {(props)=><CheckYourEmail {...props} />}
        </Stack.Screen> 
        <Stack.Screen name='successfully' options={{headerShown:false}}>
            {(props)=><Successfully {...props} />}
        </Stack.Screen> 

    
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  ViewContainer :{ 
    flex:1
  }
})