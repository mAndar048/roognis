import { apiGet } from "./client";

export async function fetchNudges() {
  const json = await apiGet("/api/nudges");
  return json.data || [];
}
