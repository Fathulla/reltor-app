import { useEffect, useState } from "react";

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <>
      <h2>Favorites</h2>
      {favorites.map((card) => (
        <div key={card.property_id}>
          {/* Render the favorite card */}
        </div>
      ))}
    </>
  );
};