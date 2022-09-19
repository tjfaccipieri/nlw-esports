import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBanner } from '../components/GameBanner';
import { CreateAdBanner } from '../components/CreateAdBanner';

import logoImg from '../assets/logo.svg';
import { CreateAdModal } from '../components/CreateAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games').then((response) =>
      setGames(response.data)
    );
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logotipo NLW" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-clip-text text-transparent bg-nlw-gradient ">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <Link to={`/gameDetails/${game.id}`} key={game.id}>
            <GameBanner
              
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          </Link>
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}
