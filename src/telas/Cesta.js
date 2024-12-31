import React from 'react'
import { Image, Text, View } from 'react-native';

import estilos from './estilos';

import Texto from '../componentes/Texto';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const Cesta = () => {
  return(
    <>
      <Image style={estilos.topo} source={topo} />
      <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

      <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
          <View style={estilos.fazenda}>  
            <Image style={estilos.imagemFazenda} source={logo} />
            <Texto style={estilos.nomeFazenda}> Jenny Jack Farm</Texto>
          </View>
          <Texto style={estilos.descricao}> Uma cesta com produtos selecionados cuidadosamente da fazendo para a cozinha.</Texto>
          <Texto style={estilos.preco}>R$40,00</Texto>
      </View>
    </>
  )
}

export default Cesta;