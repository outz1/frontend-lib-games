import { Game, GameFormData } from "@/types/game";

const API_URL = 'http://localhost:3000/games';

export async function getAllGames(): Promise<Game[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }
  return response.json();
}

export async function getGameById(id: number): Promise<Game> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch game');
  }
  return response.json();
}

export async function createGame(game: GameFormData): Promise<Game> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  if (!response.ok) {
    throw new Error('Failed to create game');
  }
  return response.json();
}

export async function updateGame(id: number, game: GameFormData): Promise<Game> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  if (!response.ok) {
    throw new Error('Failed to update game');
  }
  return response.json();
}

export async function deleteGame(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete game');
  }
}
