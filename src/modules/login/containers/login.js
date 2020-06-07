import React, { Component } from "react";
import {  StyleSheet, View, Image,  TouchableOpacity} from 'react-native';
import {  Container, Button, Content, Card, CardItem, Input, Text, Body, Item, Label,  Icon  } from "native-base";


// class Notas extends Component {
//   render() {

export default function Login({navigation}) {
  


    return (
      <Container style={styles.fondo}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Image source={require('../../../assets/image/logoMega.png')} style={styles.imag} />
        </View>

        <Content padder contentContainerStyle={styles.content}>

          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>INICIO DE SESION</Text>
            </CardItem>
            <CardItem bordered>
              <Body>

                <Item floatingLabel>
                  <Icon active name="person" />
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item floatingLabel >
                  <Icon active name="lock"  />
                  <Label>Password</Label>
                  <Input secureTextEntry={true} />
                </Item>

              </Body>
            </CardItem>

          </Card>
        </Content>
        <View style={{ flex: 1}}>
        <View style={{ flex: 0.5, marginTop: 2, marginLeft: 20, marginRight: 20, /*backgroundColor:'red'*/ }}>
          <Button 
          block 
          rounded 
          success
          onPress={() => navigation.navigate('Inicio')}
          >
            <Text> Ingresar </Text>
          </Button>
        </View>

        <View style={{ flex: 0.2}}>
          <Text style={{ color: 'gray', textAlign: 'center' }}> O usa tus Redes </Text>
        </View>
        <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: "center", paddingTop: 20 }}>
          <View>
            <TouchableOpacity>
              <Button block rounded iconLeft bordered>
                <Icon name="logo-facebook" ></Icon>
                <Text> facebook </Text>
              </Button>
            </TouchableOpacity>
          </View>
          <View>
            <Text>  </Text>
          </View>

          <View>
            <Button block rounded iconLeft bordered danger >
              <Icon name="logo-google"></Icon>
              <Text> google   </Text>
            </Button>
          </View>

        </View>




        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center", paddingTop: 29 }}>
          <View>
            <TouchableOpacity>
              <Text style={{paddingTop: 20 }} >
                ¿Olvidó su contraseña?
              </Text>
                           
            </TouchableOpacity>
          </View>
          <View>
            <Text>  </Text>
          </View>

          <View>
          <TouchableOpacity>
              <Text style={{paddingTop: 20 }} onPress={() => navigation.navigate('Registro')}>
                ¿Registrarse?
              </Text>
                           
            </TouchableOpacity>
          </View>

        </View>
        </View>

        <View style={{ flex: 0.1, backgroundColor: '#E9F7EF', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: "blue" }}> Andres Pianda - Dispositivos Moviles</Text>
        </View>
      </Container>
    );

  }


//   }
// }

const styles = StyleSheet.create({
fondo:{
  backgroundColor:'#FAFAFA',
  },

  textCenter:{

    textAlign: 'center',
    width: '100%'
  },
  content:{
    flex: 2,
    //justifyContent: 'center'
    textAlign: 'center',
   // backgroundColor:'blue'
    
  },
  boton:{
    //alignItems:'center'
  },
  imag:{
          width: 180, 
          height: 180
      }

})

//export default Notas;