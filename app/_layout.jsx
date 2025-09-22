import { Stack } from "expo-router";
//Stack is just like a pile/stack of screens/pages. So we have different methods for navigation.
const RootLayout = () => {
  return <Stack 
  screenOptions={
   {
      headerStyle:{ '#ff8c00',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    contentStyle: {
      paddingHorizontal: 10,
      paddingTop: 10,
      backgroundColor: '#fff',
    }
  }
}
  >
    <Stack.Screen name='index' options={{title: 'Home'}} />
  </Stack>
}

export default RootLayout;
