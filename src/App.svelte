<script lang="ts">
  import ErrorBoundary from './lib/components/ErrorBoundary.svelte';
  import DarkVeil from './lib/components/ui/DarkVeil.svelte';
  import AnimationToggle from './lib/components/ui/AnimationToggle.svelte';

  let animationsEnabled = $state(true);
</script>

<ErrorBoundary>
  <div class="relative min-h-screen bg-gray-950 text-white overflow-hidden">
    <!-- Animated background -->
    {#if animationsEnabled}
      <div class="fixed inset-0 z-0">
        <DarkVeil speed={0.3} noiseIntensity={0.03} />
      </div>
    {/if}

    <!-- Toggle -->
    <header class="fixed top-0 right-0 z-20 p-4">
      <AnimationToggle
        enabled={animationsEnabled}
        onToggle={() => (animationsEnabled = !animationsEnabled)}
      />
    </header>

    <!-- Content -->
    <main class="relative z-10 min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-5xl font-bold">Victor Medeiros</h1>
        <p class="mt-4 text-lg text-gray-400">Portfolio — Coming Soon</p>
      </div>
    </main>
  </div>
</ErrorBoundary>
