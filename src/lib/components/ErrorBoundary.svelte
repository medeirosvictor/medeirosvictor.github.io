<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();

  let error: (Error & { status?: number }) | null = $state(null);
  let statusCode: number = $state(500);

  function handleError(e: Error) {
    error = e;
    statusCode = (e as any)?.status || 500;
  }

  function reset() {
    error = null;
    statusCode = 500;
  }
</script>

<svelte:boundary onerror={handleError}>
  {#if error}
    <div class="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div class="text-center space-y-4">
        <h1 class="text-8xl font-bold text-red-500">{statusCode}</h1>
        <p class="text-xl text-gray-400">
          {#if statusCode === 404}
            Page not found
          {:else}
            Something went wrong
          {/if}
        </p>
        {#if error?.message}
          <p class="text-sm text-gray-600 max-w-md mx-auto">{error.message}</p>
        {/if}
        <button
          onclick={reset}
          class="mt-6 px-6 py-2 bg-white text-gray-950 rounded-lg font-medium hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  {:else}
    {@render children()}
  {/if}
</svelte:boundary>
