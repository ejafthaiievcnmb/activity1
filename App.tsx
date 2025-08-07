
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View >
       
       <View>
        <Image source={require('./img/welcome_to_react.png')} /> 
      </View>


       <Text style={styles.welcomeText}>Welcome your React App!</Text>
        <Text>Enter Name:</Text>
        <TextInput placeholder="First Name"/>
        <Text>Enter Surname:</Text>
        <TextInput placeholder="Surname"/>

<Button title="Add User" />

    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
paddingTop: 40,
color: 'purple',
fontWeight: 'bold',
fontSize: 28,
textAlign: 'center',
}

});
