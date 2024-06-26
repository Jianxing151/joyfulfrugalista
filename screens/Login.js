import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signUp}>Sign up</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: 20,
      backgroundColor: '#fff',
    },
    logoContainer: {
      width: 160,
      height: 160,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,
      backgroundColor: '#E91E63',
      borderRadius: 80,
    },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'left',
    color: '#2d144b',
  },
  input: {
    height: 50,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#673AB7',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  forgotPassword: {
    color: '#673AB7',
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
  },
  signUp: {
    color: '#673AB7',
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
  },
});


export default Login;
