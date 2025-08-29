import { Game } from "@/types/game";
import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import Rating from "./Rating";
import PriceTag from "./PriceTag";
import { formatDate } from "@/lib/utils";
import { getGameImage } from "@/constants/images";

interface GameCardProps {
  game: Game;
  onDelete: (id: number) => void;
}

export default function GameCard({ game, onDelete }: GameCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 bg-gray-200">
        <Image
          src={getGameImage(game.title)}
          alt={game.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={game.id <= 3}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 truncate">{game.title}</h2>
          <Rating value={game.rating} />
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge label={game.genre} variant="primary" />
            <Badge label={game.platform} variant="secondary" />
          </div>
          
          <div className="flex items-center justify-between">
            <PriceTag price={game.price} size="lg" />
            <span className="text-sm text-gray-500">
              {formatDate(game.releaseDate)}
            </span>
          </div>
          
          <div className="flex gap-2 pt-4">
            <Link 
              href={`/games/${game.id}`}
              className="flex-1 bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Details
            </Link>
            <Link 
              href={`/games/${game.id}/edit`}
              className="flex-1 bg-yellow-500 text-white text-center px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={() => onDelete(game.id)}
              className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
