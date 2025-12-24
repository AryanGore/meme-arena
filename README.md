# Meme Arena 🎮

Meme Arena is a fun, interactive React game where users vote on meme templates in head-to-head battles. Two memes appear each round, and the user selects the funnier one. After a fixed number of rounds, a leaderboard displays which memes performed the best.

This project focuses on real-world React concepts, clean component design, and state management without using a backend.


## Features

- Random meme battles (two memes per round)
- Vote tracking for each meme
- Fixed number of rounds per game
- Leaderboard showing top-voted memes
- Welcome screen with game instructions
- Play again / reset functionality
- Responsive, game-style UI


## Tech Stack

- React (Functional Components)
- React Hooks (`useState`, `useEffect`)
- CSS (component-based styling)
- Public Meme API (Imgflip)



## How the Game Works

1. The app fetches meme templates on initial load.
2. Two random memes are shown each round.
3. Clicking a meme gives it one vote.
4. The game runs for 15 rounds.
5. After the final round, a leaderboard shows the top memes.
6. The user can restart the game from the beginning.


## Key React Concepts Used

- Lifting state up
- Controlled side effects with `useEffect`
- Conditional rendering
- Derived state (leaderboard sorting)
- Component composition
- Event handling
- Immutable state updates

Deployed Project , Try Here : 