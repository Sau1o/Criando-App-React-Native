import React from 'react'
import { Image, Text, StyleSheet, Dimensions } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

const Cesta = () => {
    return(
        <>
            <Image style={estilos.topo} source={topo} />
            <Text style={estilos.titulo}>Detalhe da cesta</Text>
        </>
    )
}

export default Cesta;

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo:{
        width:'100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight:'bold',
        padding: 16
    }
})