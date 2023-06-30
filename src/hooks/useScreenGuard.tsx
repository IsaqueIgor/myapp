import { useNavigationState } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'
import { useEffect, useState } from 'react';


export function useScreenGuard (screenName: string) {
   const [sessionTime, setSessionTime] = useState(0)
   const navigationState = useNavigationState(state => state)

   async function handleAuth() {
      const auth = await LocalAuthentication.authenticateAsync({
         promptMessage: "Please authenticate to continue",
      })

      if(auth.success){
         console.log("Authenticated")
         setSessionTime(0);
      }else {
         handleAuth();
      }
   }

   useEffect(() => {
      if(sessionTime < 10) {
         const timer = setTimeout(() => {
            setSessionTime(prev => prev+1);
            console.log(sessionTime)
         }, 1000)

         return () => clearTimeout(timer)
      } else {
         if(navigationState.routes){
            const currentScreen = navigationState.routes[navigationState.index];
            console.log(currentScreen.name);
            if(currentScreen.name === screenName){
               handleAuth();
            }
         }
      }
   }, [sessionTime]);
}