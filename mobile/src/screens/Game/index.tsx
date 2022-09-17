import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import {useRoute} from '@react-navigation/native'

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';

export function Game() {
  const route = useRoute()
  const game = route.params as GameParams;
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        {/* parado em 1:45 do video 4/6 */}
      </SafeAreaView>
    </Background>
  );
}
