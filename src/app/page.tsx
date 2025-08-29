'use client';

import { useEffect, useState } from "react";
import GameCard from "@/components/GameCard";
import Loading from "@/components/Loading";
import Alert from "@/components/Alert";
import { getAllGames, deleteGame } from "@/lib/api";
import { Game } from "@/types/game";

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      const data = await getAllGames();
      setGames(data);
      setError(null);
    } catch (err) {
      setError('Failed to load games');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this game?')) {
      return;
    }

    try {
      await deleteGame(id);
      setGames(games.filter(game => game.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete game');
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Games Library</h1>
            <p className="mt-2 text-gray-600">
              Explore our collection of {games.length} amazing games
            </p>
          </div>
        </div>

        {error && (
          <Alert type="error" message={error} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map(game => (
            <GameCard
              key={game.id}
              game={game}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {games.length === 0 && !error && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No games found</h3>
            <p className="mt-2 text-gray-500">
              Get started by adding some games to your library
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
