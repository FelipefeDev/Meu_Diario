import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const Menu = () => {
    return(
        <View style={estilo.container}>
            <View style={estilo.logo}>
                <Text style={estilo.titulo}>Teste</Text>
            </View>
            <View style={estilo.botoes}></View>
                        
        </View>
    );
}



const estilo = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",


    },
    botoes: {
        flex: 1,   
        backgroundColor: 'Blue',
    },
    logo: {
        flex: 2,   
        backgroundColor: 'Black',
        justifyContent: "center",
        alignItems: "center",
    },
    titulo:{
        fontSize: '2em',
        color: '#ff1f00',
    }
  });



export default Menu;

