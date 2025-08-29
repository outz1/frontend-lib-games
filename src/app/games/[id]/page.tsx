'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "@/components/Loading";
import Alert from "@/components/Alert";
import { getGameById, deleteGame } from "@/lib/api";
import { Game } from "@/types/game";
import Link from "next/link";

export default function GameDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGame();
  }, [params.id]);

  const loadGame = async () => {
    try {
      const data = await getGameById(parseInt(params.id));
      setGame(data);
      setError(null);
    } catch (err) {
      setError('Failed to load game');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!game || !window.confirm('Are you sure you want to delete this game?')) {
      return;
    }

    try {
      await deleteGame(game.id);
      router.push('/');
    } catch (err) {
      setError('Failed to delete game');
    }
  };

  if (isLoading) return <Loading />;
  if (!game) return <Alert type="error" message={error || 'Game not found'} />;

  return (
    <div className="max-w-4xl mx-auto">
      {error && <Alert type="error" message={error} />}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <Image
            src={game.image || 'https://via.placeholder.com/800x600'}
            alt={game.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">
                <span className="font-medium">Genre:</span> {game.genre}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Platform:</span> {game.platform}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Rating:</span> {game.rating}/5
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <span className="font-medium">Price:</span> ${game.price.toFixed(2)}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Release Date:</span>{" "}
                {new Date(game.releaseDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{game.description}</p>
          </div>
          <div className="flex gap-4">
            <Link
              href={`/games/${game.id}/edit`}
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
            <Link
              href="/"
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
