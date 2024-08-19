// import { View, Text, Button } from 'react-native'
// import React from 'react'
// import { firebase } from "../Config";
// import { useNavigation } from "@react-navigation/native";

// export default function Profile() {
//     const navigation = useNavigation();
//     const  Logout = () => {
//         firebase.auth().signOut()
//         .then(()=>{alert("Logged out")})    
//        navigation.navigate('Login')
//     }
//   return (
//     <View>
//       <Button    title="Log Out" onPress={Logout} />
//     </View>
//   )
// }


import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { firebase } from "../Config";
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  const Logout = () => {
    firebase.auth().signOut()
      .then(() => { alert("Logged out"); })
      .then(() => navigation.navigate('Login'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Profile</Text>
      <Text style={styles.description}>
        Here you can manage your account, view services, and explore more about our offerings.
      </Text>
      <TouchableOpacity style={styles.button} onPress={Logout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Discover our services and more in the app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
});
