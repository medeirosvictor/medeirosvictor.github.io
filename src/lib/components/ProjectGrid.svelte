<script lang="ts">
  import { fetchFeaturedRepos } from '../../api/github';

  let { repos }: { repos: string[] } = $props();

  const promise = $derived(fetchFeaturedRepos(repos));
</script>

{#await promise}
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
    {#each repos as repo}
      <div
        aria-label="Loading {repo}"
        class="bg-surface border border-card-dim border-l-2 border-l-accent p-4 flex flex-col gap-3"
      >
        <div class="bg-skeleton animate-skeleton w-[55%] h-3.5"></div>
        <div class="bg-skeleton animate-skeleton w-full h-3"></div>
        <div class="bg-skeleton animate-skeleton w-[70%] h-3"></div>
        <div class="bg-skeleton animate-skeleton w-[30%] h-[0.6875rem] mt-1"></div>
      </div>
    {/each}
  </div>

{:then data}
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
    {#each data as repo (repo.id)}
      <div class="bg-surface border border-card-dim border-l-2 border-l-accent p-4 flex flex-col justify-between gap-4">

        <div class="flex flex-col gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-sm font-bold tracking-[0.1em] text-phosphor no-underline transition-colors duration-[80ms] hover:text-phosphor-bright"
          >
            {repo.name}
          </a>
          {#if repo.description}
            <p class="text-[0.8125rem] text-gray-400 leading-[1.5] m-0">{repo.description}</p>
          {/if}
        </div>

        <div class="flex flex-col gap-2.5">
          {#if repo.languages.length > 0 || repo.topics.length > 0}
            <div class="flex flex-wrap gap-1.5">
              {#each repo.languages as lang}
                <span class="font-mono text-[0.6875rem] tracking-[0.1em] text-purple-500 border border-purple-500/25 px-2 py-0.5">
                  {lang}
                </span>
              {/each}
              {#each repo.topics as topic}
                <span class="font-mono text-[0.6875rem] tracking-[0.1em] text-accent border border-accent px-2 py-0.5">
                  {topic}
                </span>
              {/each}
            </div>
          {/if}

          <div class="flex gap-2.5">
            {#if repo.homepage}
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-[0.6875rem] font-bold tracking-[0.15em] text-phosphor no-underline transition-colors duration-[80ms] hover:text-phosphor-bright"
              >[ LIVE ]</a>
            {/if}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-[0.6875rem] font-bold tracking-[0.15em] text-phosphor no-underline transition-colors duration-[80ms] hover:text-phosphor-bright"
            >[ GITHUB ]</a>
          </div>
        </div>

      </div>
    {/each}
  </div>

{:catch error}
  <p class="font-mono text-[0.8125rem] tracking-[0.1em] text-accent">// FETCH ERROR: {error.message}</p>
{/await}
