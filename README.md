# 💣 Modern Minesweeper

A stunning, modernized version of the classic Minesweeper game built with **React**, **TypeScript**, and **Vite**. This project features a premium "Blue Black" dark aesthetic, dynamic animations, and responsive gameplay.

## ✨ Features

- **Classic Gameplay**: Authentic Minesweeper logic with revealing, flagging, and recursive clearing.
- **Three Button Mouse**: Left click to reveal, Right click to flag.
- **Difficulty Levels**:
  - **Easy**: 9x9 grid, 10 mines.
  - **Medium**: 16x16 grid, 40 mines.
  - **Expert**: 16x30 grid, 99 mines.
- **Stunning UI**:
  - Deep "Blue Black" dark mode theme.
  - Glassmorphism effects and vibrant neon accents.
  - Smooth hover states and interaction feedback.
- **Dynamic Visual Effects**:
  - **Explosions**: Full-screen particle explosion and shockwave upon losing.
  - **Screen Shake**: Visceral impact feedback when a mine is triggered.
  - **Confetti**: Celebratory effects upon winning.
  - **Animations**: Pop-in animations for revealing cells.
- **Sound Effects**: Audio feedback for clicks, reveals, flags, game over, and winning.
- **Responsive Design**: Playable on various screen sizes with scrollable boards for larger levels.
- **Timer**: Accurate, drift-free timer tracking gameplay duration.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (Custom properties, Animations, Flexbox/Grid)
- **Icons**: SVG & Lucide React
- **Utils**: `clsx`, `react-confetti`

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/minesweeper.git
    cd minesweeper
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit `http://localhost:5173` in your browser.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate the optimized files in the `dist` directory.

## 📂 Project Structure

```
src/
├── components/      # React components (Board, Cell, Header, Explosion, etc.)
├── constants/       # Game constants (Difficulty levels, Colors)
├── hooks/           # Custom hooks (useMinesweeperGame, useTimer, useSFX)
├── types/           # TypeScript definitions
├── utils/           # Game logic helper functions
├── App.tsx          # Main application component
├── App.css          # Component-specific styles
└── index.css        # Global styles and theme variables
```

## 🎮 How to Play

1.  **Objective**: Clear the board without detonating any mines.
2.  **Reveal**: Left-click a cell to reveal it.
    - If it's a mine 💣: Game Over! (Enjoy the explosion).
    - If it's a number 🔢: It shows how many mines are adjacent to that cell.
    - If it's empty ⬜: It recursively reveals adjacent empty cells.
3.  **Flag**: Right-click a cell to place a flag 🚩 where you suspect a mine is hidden.
4.  **Win**: Successfully reveal all non-mine cells or flag all mines correctly (depending on specific rule implementation).

## 🎨 Theme Customization

The theme is built using CSS variables in `src/index.css`. You can easily tweak the color palette:

```css
:root {
  --app-bg: #020617; /* Main background */
  --surface: #0f172a; /* Game board surface */
  --btn-color: #3b82f6; /* Primary button color */
  /* ... and more */
}
```

## 📄 License

This project is open-source 
