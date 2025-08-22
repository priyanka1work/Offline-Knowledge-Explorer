import React, { useState } from "react";

export default function FavoriteButton({ articleId }) {
  const [fav, setFav] = useState(false);

  const toggle = () => {
    setFav(!fav);
    console.log(`Article ${articleId} favorite: ${!fav}`);
  };

  return <button onClick={toggle}>{fav ? "★ Favorite" : "☆ Favorite"}</button>;
}