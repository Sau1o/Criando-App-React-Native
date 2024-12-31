import React from 'react'
import { View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

import estilos from './estilos';

const Cesta = ({topo, detalhes}) => {
  return(
    <>
        <Topo {...topo}/>
        <View style={estilos.cesta}>
          <Detalhes {...detalhes}/>        
      </View>
    </>
  )
}

export default Cesta;