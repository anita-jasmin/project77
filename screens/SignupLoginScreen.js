import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Modal,
} from "react-native";
import firebase from "firebase";
import db from "../config";
export default class SignupLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      isModalVisible: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      confirmPassword: "",
    };
  }
  showModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <View></View>
      </Modal>
    );
  };
  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return alert("User Login Successful");
      })
      .catch((error) => {
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };
  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then(() => {
        return alert("User Successfully SignedUp");
      })
      .catch((error) => {
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };
  render() {
    return (
      <View style={{ backgroundColor: "#E9ECE3" }}>
        <View style={{ marginTop: 250 }}>
          <TextInput
            style={styles.textInput}
            placeholder="   email"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="   password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "sans-serif",
                fontSize: 19,
                margin: 5,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "column",
            marginTop: 100,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}
          >
            <Text
              style={{
                color: "#8EC63F",
                textAlign: "center",
                fontFamily: "sans-serif",
                fontSize: 19,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    borderRadius: 20,
    height: 40,
    width: 250,

    borderWidth: 1,
    margin: 20,
    fontSize: 19,
    fontFamily: "sans-serif",
    backgroundColor: "#FFFFFF",
  },
  button: {
    borderRadius: 20,
    height: 40,
    width: 250,

    borderWidth: 1,
    margin: 20,
    backgroundColor: "#8EC63F",
  },
  textstyle: {
    textAlign: "center",
    fontFamily: "sans-serif",
    alignSelf: "center",
    alignItems: "center",
    fontSize: 20,
  },
});
