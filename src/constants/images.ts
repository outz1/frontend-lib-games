export const GAME_IMAGES = {
  'The Legend of Zelda: Breath of the Wild': '/images/games/zelda-botw.jpg',
  'God of War Ragnarök': '/images/games/god-of-war-ragnarok.jpg',
  'Red Dead Redemption 2': '/images/games/red-dead-redemption-2.jpg',
  'Elden Ring': '/images/games/elden-ring.jpg',
  'Cyberpunk 2077': '/images/games/cyberpunk-2077.jpg',
  // Fallback image para jogos sem imagem específica
  'default': '/images/games/  '
} as const;

// Função para obter a URL da imagem com fallback
export function getGameImage(title: string): string {
  return GAME_IMAGES[title as keyof typeof GAME_IMAGES] || GAME_IMAGES.default;
}
