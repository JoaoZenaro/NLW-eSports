import './styles/main.css';

import logoImg from './assets/logo-nlw.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';

import axios from 'axios'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export default function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
        .then(response => {
            setGames(response.data)
        })
  },[])
  
  return (
    <div className='max-w-[1344px] mx-auto my-20 flex items-center flex-col'>
      <img src={logoImg} alt="Logomarca"/>

      <h1 className='text-6xl text-white font-black my-20'>Seu <span className='text-transparent bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text'>duo</span> está aqui</h1>
    
      <div className='grid grid-cols-6 gap-6'>

        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}

      </div>
    
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
      
    </div>
  )
}