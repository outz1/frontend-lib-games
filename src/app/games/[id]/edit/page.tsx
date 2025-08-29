'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GameForm from "@/components/GameForm";
import Loading from "@/components/Loading";
import Alert from "@/components/Alert";
import { getGameById, updateGame } from "@/lib/api";
import type { Game, GameFormData } from "@/types/game";

export default function EditGame({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
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

  const handleSubmit = async (data: GameFormData) => {
    setIsSaving(true);
    try {
      await updateGame(parseInt(params.id), data);
      router.push(`/games/${params.id}`);
    } catch (err) {
      setError('Failed to update game');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <Loading />;
  if (!game) return <Alert type="error" message={error || 'Game not found'} />;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Game: {game.title}</h1>
      {error && <Alert type="error" message={error} />}
      <GameForm
        initialData={game}
        onSubmit={handleSubmit}
        isLoading={isSaving}
      />
    </div>
  );
}
