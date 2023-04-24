import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Botao from './src/component/Botao'


const Botao = () => {

    return(
        <TouchableOpacity style={estilo.botao}>
            <text style={estilo.texto}>Botão</text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    botao:{
        backgroundColor: "ff1f00",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "cecece",
    
    },
    texto:{
        color: "#fff",

    },


});



export default Botao;