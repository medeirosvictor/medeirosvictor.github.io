import { NotFoundError, ServerError } from '../lib/errors';

const GITHUB_API = 'https://api.github.com';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

/**
 * Fetch a single repository by full name (e.g. "medeirosvictor/some-repo")
 */
export async function fetchRepo(fullName: string): Promise<GitHubRepo> {
  const res = await fetch(`${GITHUB_API}/repos/${fullName}`);

  if (res.status === 404) {
    throw new NotFoundError(`Repository "${fullName}" not found`);
  }

  if (!res.ok) {
    throw new ServerError(`Failed to fetch repository "${fullName}" (${res.status})`);
  }

  return res.json();
}

/**
 * Fetch multiple repositories from the featured list
 */
export async function fetchFeaturedRepos(repoNames: string[]): Promise<GitHubRepo[]> {
  const results = await Promise.allSettled(repoNames.map(fetchRepo));

  return results
    .filter((r): r is PromiseFulfilledResult<GitHubRepo> => r.status === 'fulfilled')
    .map((r) => r.value);
}

/**
 * Search public repositories for a given user
 */
export async function searchUserRepos(username: string, query: string = ''): Promise<GitHubRepo[]> {
  const q = query
    ? `${query}+user:${username}`
    : `user:${username}`;

  const res = await fetch(`${GITHUB_API}/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc`);

  if (!res.ok) {
    throw new ServerError(`GitHub search failed (${res.status})`);
  }

  const data = await res.json();
  return data.items;
}
