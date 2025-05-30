export interface Game {
    id: number;
    name: string;
}

export interface GamesResponse {
    results: Game[];
}