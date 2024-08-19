import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../Config";
import styles from "./styles";


export default function Loginsubview() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [isgmail, setisgmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigation();


  const toregister = () => {
    navigation.navigate("Registration");
  };

  const validateemail = (inputemail) => {
    const isValidGmail = /^[\w-.]+@gmail\.com$/.test(inputemail.toLowerCase());
    setisgmail(isValidGmail);
  };

  const validatePassword = (password) => {
    if (password.length < 6 || password.length > 8) {
      setPasswordError("Password should be between 6 and 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const forgetpass =()=>{
    try{
      if (!isgmail) {
        alert("Please enter a valid Gmail address");
        return;
      }
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => alert('Check your email for the password reset link.'))
      
   }  catch (error){
     console.log('Error: ' + error.message);
   }
  }


  const loginuser = async () => {
    try {
      if (!isgmail) {
        alert("Please enter a valid Gmail address");
        return;
      }
      
      if (passwordError) {
        alert(passwordError);
        return;
      }

      setLoading(true);

      const credentials = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass);

      const user = credentials.user;

      if (user && user.emailVerified) {
        navigation.navigate("BottomTab");
      } else {
        alert("Please verify your email before login");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.subview}>
      <Text style={styles.subtext}>Login</Text>
      <TextInput
        style={styles.nameInput1}
        placeholder="Email"
        onChangeText={(text) => {
          setemail(text);
          validateemail(text);
        }}
      />
      <MaterialIcons
        name="email"
        size={24}
        color="black"
        style={styles.email}
      />
      {!isgmail && <Text style={styles.emailvalid}> email is not valid </Text>}
      <TextInput
        style={styles.nameInput2}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setpass(text);
          validatePassword(text);
        }}
      />
      <MaterialIcons name="lock" size={24} color="black" style={styles.pass} />
      {passwordError && <Text style={styles.emailvalid}>{passwordError}</Text>}
      <TouchableOpacity style={styles.forget} onPress={forgetpass}>
        <Text style={styles.signuptext}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={loginuser}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#2A0134" />
        </View>
      )}
      <View style={styles.endview}>
        <Text style={styles.endtext}>Don't have an account?</Text>
        
        <TouchableOpacity style={styles.signup} onPress={toregister}>
          <Text style={styles.signuptext}>Signup</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
