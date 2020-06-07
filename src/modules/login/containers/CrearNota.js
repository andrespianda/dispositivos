import React, { Component} from 'react';
import { StyleSheet,  View, Image,  TextInput, TouchableOpacity, Text } from 'react-native';
import { Container, Icon, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';



//npm install expo-font
// class Notas extends Component {
//   render() {
export default function Registro ({ navigation}){


  

      return (
      
      <Container style={styles.fondo}>

        <View style={{ flex: 1, alignItems: 'center' }}>

          <Image source={require('../../../assets/image/logoMega.png')} style={styles.imag} />
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={ { color: 'green', fontSize: 30}} > Nueva Nota</Text>
        </View>

        <View style={styles.ob}>
          <Form>

            <Item floatingLabel>
              <Label style={styles.titulos}>Nombre</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={styles.titulos}>Apellido</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={styles.titulos}>Tipo Documento</Label>
              <Input /> 

            </Item>

            <Item floatingLabel>
              <Label style={styles.titulos}>No. Documento</Label>
              <Input />
            </Item>
          </Form>

        </View>
        <View style={styles.bordes}>
          <View style={styles.bordes}>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Button block rounded iconLeft large success >
                <Icon name="md-save"></Icon>
                <Text style={{ color: 'white' }}>  Guardar Nota   </Text>
              </Button>
            </TouchableOpacity>
          </View>
          <View>
            <Text>   </Text>
          </View>
          <View style={styles.bordes}>
            <TouchableOpacity style={{ marginTop: 10 }}>
              <Button block rounded iconLeft bordered danger large onPress={() => navigation.goBack()} >
                <Icon name="md-arrow-back"></Icon>
                <Text style={{ color: 'red' }}>  Cancelar        </Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 0.2, alignItems: 'center' }}>
          <Text> Andres Pianda - Dispositivos Moviles</Text>

        </View>
      </Container>
      
    )
  }
//   }
// }

const styles =StyleSheet.create  ({
  fondo:{
    backgroundColor:'#FAFAFA',
    },
  
  ob:{
    flex: 2,
    //backgroundColor: 'blue',
  },
  bordes:{
    flex: 1,
    
    //borderWidth: 4,
    //borderColor: '#88B053',
    flexDirection: 'row',
    justifyContent: 'center'
    //padding: 10,
   // marginTop: 10,
   // width: 180,
    // paddingRight: 10,
    // paddingLeft: 10
    // backgroundColor: '#FA00FA',
  },
  imag:{
      width: 180, 
      height: 180,
  },

  titulos: {

    fontFamily: 'Helvetica',
    fontSize: 20, 
    color: 'green',
    paddingTop: -4
  }

})