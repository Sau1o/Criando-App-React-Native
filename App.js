import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

export default App;
