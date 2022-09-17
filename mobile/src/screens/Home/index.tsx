import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  let localIp: string = '192.168.0.106';

  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation()

  function handleOpenGame({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('game', {id, title, bannerUrl})
  }

  useEffect(() => {
    fetch(`http://${localIp}:3333/games`)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          contentContainerStyle={styles.contentList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GameCard data={item} onPress={() => handleOpenGame(item)} />}
        />
      </SafeAreaView>
    </Background>
  );
}
