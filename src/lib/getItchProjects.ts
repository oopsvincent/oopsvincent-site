// lib/getItchProjects.ts
export interface ItchProject {
  id: number;
  title: string;
  url: string;
  cover_url: string;
  short_text: string;
}

export async function getItchProjects(username: string, apiKey: string): Promise<ItchProject[]> {
  const res = await fetch(`https://itch.io/api/1/${apiKey}/my-games`, {
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch itch.io projects", res.statusText);
    return [];
  }

  const json = await res.json();
  return json.games || [];
}
