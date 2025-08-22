import { useState, useEffect } from "react";

export default function useCachedFetch(url, cacheKey, ttl = 5 * 60 * 1000) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
    const now = Date.now();

    if (cached && now - cached.timestamp < ttl) {
      setData(cached.data);
    }

    fetch(url)
      .then(res => res.json())
      .then(resData => {
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data: resData, timestamp: now })
        );
        setData(resData);
      });
  }, [url, cacheKey, ttl]);

  return data;
}