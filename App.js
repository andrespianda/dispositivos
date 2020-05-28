import React, { Component} from 'react';
import { StyleSheet,  View, Image, Button, TextInput } from 'react-native';




//npm install expo-font
class Notas extends Component {
  render() {

    return (
      
      <View style={styles.container}>

        <Image source={require('./assets/image/logoMega.png')} style={styles.imag} />
      

      
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
            type='password' >
          </TextInput>
        



        
          <Button title='Ingresar' color='#88B053' />
        </View>

       
        </View>
      

    )
  }
}

const styles =StyleSheet.create  ({
  container: {
    flex: 1,
    //backgroundColor: '#FAFAFA',
    backgroundColor: 'gray',
    justifyContent:'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
    


  },
  ob:{
  
    backgroundColor: '#FAFAFA',
 

  },
  bordes:{
    borderWidth: 1,
    borderColor: '#88B053',
    padding: 10,
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10
    
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