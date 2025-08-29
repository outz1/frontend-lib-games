# 🎮 Games Library

Uma aplicação moderna em Next.js para gerenciamento de uma biblioteca de jogos, construída com as melhores práticas de desenvolvimento e design responsivo.

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API](#api)
- [Componentes](#componentes)
- [Instalação](#instalação)
- [Uso](#uso)

## 🎯 Visão Geral

Esta aplicação permite gerenciar uma biblioteca de jogos com as seguintes funcionalidades:
- Listagem de jogos em grid responsivo
- Visualização detalhada de cada jogo
- Adição de novos jogos
- Edição de jogos existentes
- Remoção de jogos
- Interface moderna e responsiva

## 🚀 Tecnologias

- **Next.js 14+** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização e design system
- **API RESTful** - Integração com backend

## 📁 Estrutura do Projeto

```plaintext
src/
├── components/           # Componentes reutilizáveis
│   ├── GameCard.tsx     # Card individual do jogo
│   ├── Badge.tsx        # Badges para gênero/plataforma
│   ├── Rating.tsx       # Componente de avaliação
│   ├── PriceTag.tsx     # Formatação de preço
│   ├── Alert.tsx        # Mensagens de erro/sucesso
│   └── Loading.tsx      # Estado de carregamento
├── app/                 # Páginas da aplicação
│   ├── page.tsx         # Página inicial (lista)
│   ├── games/new/       # Criação de novo jogo
│   └── games/[id]/      # Detalhes/Edição do jogo
├── lib/                 # Utilitários
│   ├── api.ts          # Integração com backend
│   └── utils.ts        # Funções utilitárias
└── types/              # Definições de tipos
    └── game.ts         # Interfaces do jogo
```

## 🔌 API

### Endpoints

```typescript
GET    /games     # Lista todos os jogos
GET    /games/:id # Obtém detalhes de um jogo
POST   /games     # Cria um novo jogo
PATCH  /games/:id # Atualiza um jogo
DELETE /games/:id # Remove um jogo
```

### Formato dos Dados

```typescript
{
  id: number;          // Identificador único
  title: string;       // Título do jogo
  genre: string;       // Gênero
  platform: string;    // Plataforma
  releaseDate: string; // Data de lançamento
  rating: number;      // Avaliação
  price: number;       // Preço
}
```

## 🧩 Componentes

### GameCard
- Exibição de informações do jogo
- Imagem com efeito hover
- Badges para gênero e plataforma
- Rating visual
- Preço formatado
- Botões de ação

### Sistema de Design
- Componentes reutilizáveis
- Design system consistente
- Responsividade
- Feedback visual
- Estados de loading
- Tratamento de erros

## 🛠 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
cd frontend-games
npm install
```

3. Configure o ambiente:
   - Certifique-se que a API está rodando em http://localhost:3000
   - Verifique se as imagens estão na pasta public/images/games

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 💻 Uso

A aplicação estará disponível em http://localhost:3001 e oferece:

- **Página Inicial**: Grid de jogos com cards informativos
- **Detalhes**: Visualização completa das informações do jogo
- **Formulário**: Interface para criação e edição de jogos
- **Ações**: Botões para editar e remover jogos

## 🎨 Design System

- Cores consistentes para feedback visual
- Tipografia hierárquica
- Componentes reutilizáveis
- Animações e transições suaves
- Layout totalmente responsivo

## ✨ Features

- [x] Lista de jogos em grid responsivo
- [x] Cards com informações detalhadas
- [x] Sistema de avaliação visual
- [x] Formatação de data e preço
- [x] Badges para categorias
- [x] Loading states
- [x] Tratamento de erros
- [x] Feedback visual para ações
- [x] Design moderno e responsivo

## 🔒 Segurança e Validação

- Validação de formulários
- Confirmação para ações destrutivas
- Tratamento de erros da API
- Feedback visual para o usuário

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
