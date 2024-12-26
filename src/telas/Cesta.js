import React from 'react'
import { Image, Text, StyleSheet, Dimensions, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

const Cesta = () => {
  return(
    <>
      <Image style={estilos.topo} source={topo} />
      <Text style={estilos.titulo}>Detalhe da cesta</Text>

      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de Verduras</Text>
          <View style={estilos.fazenda}>  
            <Image style={estilos.imagemFazenda} source={logo} />
            <Text style={estilos.nomeFazenda}> Jenny Jack Farm</Text>
          </View>
          <Text style={estilos.descricao}> Uma cesta com produtos selecionados cuidadosamente da fazendo para a cozinha.</Text>
          <Text style={estilos.preco}>R$40,00</Text>
      </View>
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
  },
  cesta:{
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome:{
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: 'bold',
  },
  fazenda:{
    flexDirection:'row',
    paddingVertical: 12,
  },
  imagemFazenda:{
    width: 32,
    height: 32,
  },
  nomeFazenda:{
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao:{
    color:"#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color:"#2a9f85",
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
})