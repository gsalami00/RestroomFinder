import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './Components/Forms/SignUp'
import AddRestroom from './Components/Forms/AddRestroom'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      {/* <SignUp /> */}
      <AddRestroom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
