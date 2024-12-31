import React from 'react';

import { View, Image, StyleSheet} from 'react-native';
import Texto from '../../../componentes/Texto';

const Itens = ({title, lista}) => {
  return (
    <>
        <Texto style={estilos.title}>{title}</Texto>
        {lista.map(({nome, imagem})=> {
            return( 
            <View key={nome} style={estilos.item}>
                <Image source={imagem} style={estilos.imagem}/>
                <Texto style={estilos.nome}>{nome}</Texto>
            </View> 
            )
        })}
    </>
  );
};

export default Itens;

const estilos = StyleSheet.create({
    title:{
        color:"#464646",
        fontWeight:"bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    item:{
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBlockColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center", 
    },
    imagem:{
        width: 46,
        height: 46,
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color:"#464646",
    }
})