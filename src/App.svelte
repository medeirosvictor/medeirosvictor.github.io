<script lang="ts">
  import ErrorBoundary from './lib/components/ErrorBoundary.svelte';
  import DarkVeil from './lib/components/ui/DarkVeil.svelte';
  import Header from './lib/components/Header.svelte';
  import ProjectGrid from './lib/components/ProjectGrid.svelte';
  import { featuredRepos } from './api/repos';

  let animationsEnabled = $state(true);
</script>

<ErrorBoundary>
  <div class="relative min-h-screen bg-void text-white overflow-x-hidden">

    {#if animationsEnabled}
      <div class="fixed inset-0 z-0">
        <DarkVeil speed={0.469} noiseIntensity={0.03} />
      </div>
    {/if}

    <Header
      animationsEnabled={animationsEnabled}
      onToggle={() => (animationsEnabled = !animationsEnabled)}
    />

    <main class="relative z-10 pt-12">

      <!-- Intro + Projects -->
      <section id="projects" class="flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-[960px]">
          <h1 class="font-mono text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-[0.15em] text-phosphor m-0 mb-3">
            VICTOR MEDEIROS
          </h1>
          <p class="font-mono text-sm tracking-[0.05em] text-gray-400 leading-relaxed m-0">
            Short bio — what you do, what you care about, what you build.
          </p>
          <div class="w-full h-px bg-accent my-5"></div>
          <ProjectGrid repos={featuredRepos} />
        </div>
      </section>

      <!-- Work -->
      <section id="work" class="flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-[960px]">
          <p class="font-mono text-xs tracking-[0.15em] text-accent mb-2">// WORK</p>
          <h2 class="font-mono text-xl font-bold tracking-[0.2em] text-phosphor m-0">EXPERIENCE</h2>
          <div class="w-full h-px bg-accent my-5"></div>
          <div class="flex flex-col gap-8">

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Role Title</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Company &nbsp;·&nbsp; 20XX – present</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">Short description of responsibilities and technologies.</p>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Role Title</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Company &nbsp;·&nbsp; 20XX – 20XX</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">Short description of responsibilities and technologies.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Academic -->
      <section id="academic" class="flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-[960px]">
          <p class="font-mono text-xs tracking-[0.15em] text-accent mb-2">// ACADEMIC</p>
          <h2 class="font-mono text-xl font-bold tracking-[0.2em] text-phosphor m-0">EDUCATION</h2>
          <div class="w-full h-px bg-accent my-5"></div>
          <div class="flex flex-col gap-8">

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Degree Name</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Institution &nbsp;·&nbsp; 20XX – 20XX</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">Area of study and relevant coursework or thesis.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-[960px]">
          <p class="font-mono text-xs tracking-[0.15em] text-accent mb-2">// CONTACT</p>
          <h2 class="font-mono text-xl font-bold tracking-[0.2em] text-phosphor m-0">GET IN TOUCH</h2>
          <div class="w-full h-px bg-accent my-5"></div>
          <form class="flex flex-col gap-3" onsubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="NAME"
              autocomplete="name"
              class="w-full bg-surface border border-accent text-phosphor font-mono text-[0.8125rem] tracking-[0.1em] px-3 py-2.5 outline-none transition-colors duration-[80ms] placeholder-accent focus:border-phosphor"
            />
            <input
              type="email"
              placeholder="EMAIL"
              autocomplete="email"
              class="w-full bg-surface border border-accent text-phosphor font-mono text-[0.8125rem] tracking-[0.1em] px-3 py-2.5 outline-none transition-colors duration-[80ms] placeholder-accent focus:border-phosphor"
            />
            <textarea
              placeholder="MESSAGE"
              rows="5"
              class="w-full bg-surface border border-accent text-phosphor font-mono text-[0.8125rem] tracking-[0.1em] px-3 py-2.5 outline-none transition-colors duration-[80ms] placeholder-accent focus:border-phosphor resize-y min-h-28"
            ></textarea>
            <button
              type="submit"
              class="self-start bg-transparent border border-accent text-phosphor font-mono text-[0.8125rem] font-bold tracking-[0.2em] px-6 py-2.5 cursor-pointer transition-colors duration-[80ms] hover:border-phosphor hover:text-phosphor-bright"
            >
              [ SEND ]
            </button>
          </form>
        </div>
      </section>

    </main>
  </div>
</ErrorBoundary>
