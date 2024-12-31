import React from 'react'
import { View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

import estilos from './estilos';

const Cesta = () => {
  return(
    <>
        <Topo />
        <View style={estilos.cesta}>
          <Detalhes />        
      </View>
    </>
  )
}

export default Cesta;