import { NotFoundError, ServerError } from '../lib/errors';

const GITHUB_API = 'https://api.github.com';
const GITHUB_USERNAME = 'medeirosvictor';

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
  languages: string[]; // all languages used, sorted by bytes desc
}

async function fetchRepo(repoName: string): Promise<GitHubRepo> {
  const base = `${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}`;

  const [repoRes, langsRes] = await Promise.all([
    fetch(base),
    fetch(`${base}/languages`),
  ]);

  if (repoRes.status === 404) {
    throw new NotFoundError(`Repository "${repoName}" not found`);
  }

  if (!repoRes.ok) {
    throw new ServerError(`Failed to fetch repository "${repoName}" (${repoRes.status})`);
  }

  const repo = await repoRes.json();
  const langsData: Record<string, number> = langsRes.ok ? await langsRes.json() : {};

  const languages = Object.entries(langsData)
    .sort(([, a], [, b]) => b - a)
    .map(([lang]) => lang);

  return { ...repo, languages };
}

/**
 * Fetch multiple repositories by name. Repos are resolved under GITHUB_USERNAME.
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
