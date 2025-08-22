import { openDB } from "idb";

export async function initDB() {
  return openDB("OfflineDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("articles")) {
        db.createObjectStore("articles", { keyPath: "id" });
      }
    },
  });
}

export async function saveArticle(article) {
  const db = await initDB();
  return db.put("articles", article);
}

export async function getArticle(id) {
  const db = await initDB();
  return db.get("articles", id);
}