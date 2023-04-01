import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class App extends Component {

  showAlert = () => {
    Alert.alert(
      'Message',
      'This is a Message',
      [
        {
          text: 'OK', 
          onPress:() => console.log('OK'),
        }
      ]
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Hey Beautiful!</Text>
        <Button title="Show Alert" 
                onPress={this.showAlert}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7b5bba", 
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})

export default App;