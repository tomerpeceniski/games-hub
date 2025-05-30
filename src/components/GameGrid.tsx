import { useEffect, useState } from "react";
import type { Game, GamesResponse } from "../models/fetch-game-types";
import api from "../services/api-client";

const GameGrid = () => {

  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    api.get<GamesResponse>("/games").then(res => setGames(res.data.results))
  })
  
  return (
    <ul>
        {games.map(g => <li key={g.id}>{g.name}</li>)}
    </ul>
  )
}

export default GameGrid