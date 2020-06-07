import React, { Component} from 'react';
import { StyleSheet,  View, Image,  TextInput, TouchableOpacity, Text } from 'react-native';
import { Container, Icon, Content, Form, Item, Input, Label, Button, Card, CardItem, Body } from 'native-base';



export default function Registro ({ navigation}){

    const [modalVisible, setModalVisible] = useState(false);
  

    return (

        
    
        <Container style={styles.fondo}>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >

            <View style={{ flex: 0.3, alignItems: 'center' }}>
                <Image source={require('../../../assets/image/logoMega.png')} style={styles.imag} />
            </View>


            <View style={{ flex: 0.03, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "green", fontSize: 22, fontWeight: 'bold' }}> MENU </Text>
            </View>


            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' /*backgroundColor:'blue'*/ }}>
                    <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Consulta')}>
                            <Card style={{ alignItems: 'center' }} >
                                <Image source={require('../../../assets/image/Busqueda.png')} style={styles.imag} />

                                <Text style={{ color: 'green', fontWeight: 'bold' }}>
                                    CONSULTAR NOTA
                                </Text>
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8 }} >
                        <TouchableOpacity onPress={() => navigation.navigate('CrearNota')}>
                            <Card style={{ alignItems: 'center' }}>
                                <Image source={require('../../../assets/image/Nota.png')} style={styles.imag} />

                                <Text style={{ color: 'green', fontWeight: 'bold' }}>
                                    CREAR NOTA
                                </Text>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',   /*backgroundColor:'red'*/ }}>
                    <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8 }} >

                        <TouchableOpacity onPress={() => navigation.navigate('CrearNota')}>
                            <Card style={{ alignItems: 'center' }}>

                                <Image source={require('../../../assets/image/settings.png')} style={styles.imag} />

                                <Text style={{ color: 'green', fontWeight: 'bold' }}>
                                    CONFIGURACIONES
                                </Text>
                            </Card>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Card style={{ alignItems: 'center' }} >


                                <Image source={require('../../../assets/image/Salir.png')} style={styles.imag} />

                                <Text style={{ color: 'green', fontWeight: 'bold' }}>
                                    SALIR
                            </Text>


                            </Card>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>

            <View style={{ flex: 0.1, backgroundColor: '#E9F7EF', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "blue" }}> Andres Pianda - Dispositivos Moviles</Text>
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
 
  
  //borderWidth: 4,
  borderColor: 'green',
  height: 5,
  //width: 10
  //padding: 10,
 // marginTop: 10,
 // width: 180,
  // paddingRight: 10,
  // paddingLeft: 10
  // backgroundColor: '#FA00FA',
},
imag:{
    width: 120, 
    height: 120,
},

titulos: {

  fontFamily: 'Helvetica',
  fontSize: 20, 
  color: 'green',
  paddingTop: -4
}

})