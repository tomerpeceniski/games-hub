# Games Hub

Games Hub is a website for browsing through game reviews, where users can find desired games using a range of filters such as platform, genre, and sorting options.

## Preview

![App preview](./public/screenshot.gif)

## Features
- Browse a large collection of video games
- Filter by platform and genre
- Sort by popularity, release date, and more
- Responsive UI with dark mode

## Deployed Website
Check out the [deployed website](https://games-hub-gules.vercel.app/) to explore the app in action.

## Technologies Used
- Vite
- React
- TypeScript
- Chakra UI
- React Query
- Zustand
- Axios

## API
This application uses the public RAWG Video Games Database API for searching and retrieving game data. For more information, see the [RAWG API documentation](https://rawg.io/apidocs).

## Getting Started (Run Locally)

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/tomerpeceniski/games-hub.git>
   cd games-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a `.env` file in the root directory:**
   Add your RAWG API key:
   ```env
   VITE_RAWG_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to use the app.

---

**Note:** You must obtain a free API key from [RAWG](https://rawg.io/apidocs) and add it to your `.env` file as shown above.

## Contact

Created by [Tomer Peceniski](https://github.com/tomerpeceniski) — feel free to reach out!