import React, { Component} from 'react';
import { StyleSheet,  View, Image, Button, TextInput, TouchableOpacity, Text } from 'react-native';




//npm install expo-font
class Notas extends Component {
  render() {

    return (
      
      <View style={styles.container}>
        <View style={{flex:1,  justifyContent: 'center'}}>

        <Image source={require('../../../assets/image/logoMega.png')} style={styles.imag} />
        </View>
        <View style={styles.ob}>
          <TextInput
            placeholder='Usuario'
            placeholderTextColor='#88B053'
            maxLength={8}
            style={styles.bordes}>


          </TextInput>
        

     
          <TextInput
            placeholder='passwod'
            placeholderTextColor='#88B053'
            maxLength={8}
            style={styles.bordes}
            type='Password' >
          </TextInput>
        
        <TouchableOpacity style={{marginTop:10}}>
          <Button style={{}}title='Ingresar' color='#88B053' />
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.2, justifyContent: 'center'}}>
          <Text> Andres Pianda - Dispositivos Moviles</Text>

        </View>

       
        </View>
      
    )
  }
}

const styles =StyleSheet.create  ({
  container: {
    flex: 1,
    //backgroundColor: '#FAFAFA',
    backgroundColor: '#FAFAFA',
    justifyContent:'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
    


  },
  ob:{
    flex: 0.8,
    //backgroundColor: '#FA00FA',
    

 

  },
  bordes:{
    borderWidth: 1,
    borderColor: '#88B053',
    padding: 10,
    marginTop: 10,
    width: 180,
    // paddingRight: 10,
    // paddingLeft: 10
    
  },
  imag:{
      width: 180, 
      height: 180,

  },

  titulos: {

    fontFamily: 'Helvetica',
    fontSize: 25
    
  }

})


export default Notas;