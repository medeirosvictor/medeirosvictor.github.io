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
        <DarkVeil speed={0.469} noiseIntensity={0.03} scanlineFrequency={1.0} scanlineIntensity={1.0} warpAmount={3} />
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
            Hello! I'm Victor, Computer Scientist from Brazil and Software Developer or Engineer with a decade of experience. This is my portfolio of projects, these are either hobbies + attempts to learn a new language or build something I thought I'd use. Make no mistake, I'll show off my university/undergrad projects as they were part of the computer science graduation, trial by fire, that I had to go through before modern LLM/AI coding agents. I vibe coded better interfaces for them and generated better READMEs.
            Hope you enjoy scanning through these or even finding some of my personal projects useful for you.</p>
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
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Fullstack Software Developer - Brainstorm</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Contract Part-time &nbsp;·&nbsp; Remote EST</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">Software developer supporting Build-A-Bear's e-commerce and digital customization experiences with full SFCC integrations.</p>
              <ul class="text-sm text-gray-400 mt-2 leading-relaxed list-disc list-inside">
                <li>Scent Finder Experience — Interactive product discovery flow using React and modern accessibility standards</li>
                <li>Online Bear Personalization Journey — Multistep customization interface with performance optimization</li>
                <li>Collaborating with designers, PMs and QA teams to deliver performant components</li>
              </ul>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Fullstack Software Developer / AI Engineer</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">NovaceneAI &nbsp;·&nbsp; Aug 2025 – Feb 2026</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">Fullstack engineer on business intelligence platform. Reduced AI token usage by 96% (250k→10k per query). Built agentic AI workflows with dynamic tool selection. Contributed to AI-powered digital forensics tool for U.S. State Police.</p>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Fullstack Software Developer</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">OSF Digital &nbsp;·&nbsp; Feb 2020 – Jul 2025</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">Led migration of 52 L'Oréal brand sites (Lancôme, Giorgio Armani, YSL, Kiehl's, Urban Decay, La Roche Posay) to SFRA. Increased accessibility compliance from 52% to 92%. Mentored junior developers and established frontend best practices.</p>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Frontend Developer / Tech Lead</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">OSF Digital &nbsp;·&nbsp; May 2018 – Feb 2020</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">Developed e-commerce websites for L'Oréal brands, AT&T Latam, David Yurman, GIFI France, and Fujitsu Japan using SFCC, ReactJS, VueJS, and NodeJS.</p>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Frontend Developer</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">iFactory Solutions &nbsp;·&nbsp; Aug 2017 – May 2018</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">Developed Hyatt Internal Staff Management Application using AngularJS, NodeJS, and SASS.</p>
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
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Bachelor of Science: Computer Science</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Universidade de Fortaleza - UNIFOR &nbsp;·&nbsp; 2017 – 2021</span>
              <p class="text-sm text-gray-400 mt-1 leading-relaxed">GPA: 9.2/10 — Graduated with Highest CGPA of graduating class</p>
              <p class="text-sm text-gray-500 mt-1 leading-relaxed italic">Undergrad Thesis (95/100): Ensemble Comparisons of Machine Learning Models for Forecasting Passenger Flow on Fortaleza's Public Transit System</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section id="certifications" class="flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-[960px]">
          <p class="font-mono text-xs tracking-[0.15em] text-accent mb-2">// CERTIFICATIONS</p>
          <h2 class="font-mono text-xl font-bold tracking-[0.2em] text-phosphor m-0">CERTIFICATIONS</h2>
          <div class="w-full h-px bg-accent my-5"></div>
          <div class="flex flex-col gap-4">

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Salesforce Certified B2C Commerce Developer</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Salesforce &nbsp;·&nbsp; Credential ID: 19242433</span>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Salesforce Certified Administrator (SCA)</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Salesforce &nbsp;·&nbsp; Credential ID: 5279369</span>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Salesforce AI Associate</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Salesforce &nbsp;·&nbsp; Credential ID: 5324511</span>
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
