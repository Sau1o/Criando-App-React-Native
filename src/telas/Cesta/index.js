import React from 'react'
import { View, FlatList } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

import estilos from './estilos';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';

const Cesta = ({topo, detalhes,itens}) => {
  return(
    <>
      <FlatList 
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({nome})=> nome}
        ListHeaderComponent={()=> {
          return(
          <>
            <Topo {...topo}/>
            <View style={estilos.cesta}>
              <Detalhes {...detalhes}/> 
              <Texto style={estilos.title}>{itens.title}</Texto>      
            </View>
          </>
          )
        }
      }
      />
    </>
  )
}

export default Cesta;