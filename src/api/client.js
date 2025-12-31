const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export async function apiGet(path) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`GET ${path} failed: ${res.status}`);
  }
  return res.json();
}
