export interface Game {
  id: number;
  title: string;
  image: string;
  genre: string;
  platform: string;
  rating: number;
  price: number;
  releaseDate: string;
  description: string;
}

export interface GameFormData extends Omit<Game, 'id'> {
  id?: number;
}
