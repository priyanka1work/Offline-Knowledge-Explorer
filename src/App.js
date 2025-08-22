import React, { useState } from "react";
import TreeView from "./components/TreeView";
import ArticleView from "./components/ArticleView";
import FavoriteButton from "./components/FavoriteButton";

export default function App() {
  const [selected, setSelected] = useState(null);

  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(() => {
        console.log("Service Worker Registered");
      });
    }
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>Offline Knowledge Explorer</h1>
      <div style={{ display: "flex", gap: "32px" }}>
        <div style={{ width: "200px" }}>
          <TreeView onSelect={node => setSelected(node.id)} />
        </div>
        <div style={{ flex: 1 }}>
          {selected ? (
            <>
              <ArticleView id={selected} />
              <FavoriteButton articleId={selected} />
            </>
          ) : (
            <p>Select a topic to view</p>
          )}
        </div>
      </div>
    </div>
  );
}