// import { View, Text, TouchableOpacity, Image } from "react-native";
// import React from "react";
// import styles from "../Components/styles";
// import { useNavigation } from "@react-navigation/native";

// export default function Dashboard() {
//   const navigation = useNavigation();
//   const Livestream = () => {
//     navigation.navigate("Babylivestream");
//   };

//   return (
//     <View style={styles.Dashboardbackground}>
//     <Text  style={{fontWeight:"bold",fontSize:32,top:15}} > BABY MONITORING </Text>
       
      

//       <View style={{ top:550 }}>
//         <TouchableOpacity style={styles.Dashboardbuttons} onPress={Livestream} >
//           <Text style={styles.dashboardbtntxt} >
//             View Baby
//           </Text>
//         </TouchableOpacity>

        
//       </View>
//     </View>
//   );
// }



import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const navigation = useNavigation();
  const Livestream = () => {
    navigation.navigate("Babylivestream");
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>BABY MONITORING</Text>

        <View style={styles.card}>
          <Text style={styles.cardText}>Welcome to the Baby Monitoring App!</Text>
          <Text style={styles.cardSubtitle}>Tap the button below to start the live stream.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={Livestream}>
            <Text style={styles.buttonText}>View Baby</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Light grayish-blue background
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#00796b',
    marginVertical: 20,
    textShadowColor: '#b2dfdb',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 30,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: '#00796b',
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#00796b',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff6347', // Keep this color unchanged
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

