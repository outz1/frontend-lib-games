'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import GameForm from "@/components/GameForm";
import Alert from "@/components/Alert";
import { createGame } from "@/lib/api";
import type { GameFormData } from "@/types/game";

export default function NewGame() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: GameFormData) => {
    setIsLoading(true);
    try {
      await createGame(data);
      router.push('/');
    } catch (err) {
      setError('Failed to create game');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Game</h1>
      {error && <Alert type="error" message={error} />}
      <GameForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
