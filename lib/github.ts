// lib/github.ts

const GITHUB_USERNAME = "NiyiRoyce";

const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
};

export async function getRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`,
    {
      headers,
      next: { revalidate: 3600 }, // revalidate every hour
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return res.json();
}

export async function getRepo(slug: string) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${slug}`,
    {
      headers,
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) return null;

  return res.json();
}
