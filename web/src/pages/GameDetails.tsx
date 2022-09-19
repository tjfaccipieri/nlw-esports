import axios from 'axios';
import { useEffect, useState } from 'react';


export function GameDetails() {
  const [game, setGame] = useState()

  useEffect(() => {
    axios(`http://localhost:3333/games/12112}`).then((response) =>
    setGame(response.data)
  );
  },[])

  console.log(game)

  return(
    <>
      lalallala
    </>
  )
}