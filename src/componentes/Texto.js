import React from "react";
import { Text, StyleSheet } from "react-native";

const Texto = ({children, style}) => {
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito
    }

    return(
        <Text style={[style, estilo]}>{children}</Text>
    )
}

export default Texto;

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "MonstessatRegular",
        fontWeight: 'normal',
    },
    textoNegrito:{
        fontFamily:"MontserratBold",
        fontWeight: 'normal',
    }
})