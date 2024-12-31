import React from 'react'
import { ScrollView, View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

import estilos from './estilos';
import Itens from './componentes/Itens';

const Cesta = ({topo, detalhes,itens}) => {
  return(
    <ScrollView>
        <Topo {...topo}/>
        <View style={estilos.cesta}>
          <Detalhes {...detalhes}/>  
          <Itens {...itens}/>      
      </View>
    </ScrollView>
  )
}

export default Cesta;