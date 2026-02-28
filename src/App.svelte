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
          <div class="bg-surface/90 p-4 -mx-4 mb-2 rounded">
            <h1 class="font-mono text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-[0.15em] text-phosphor m-0 mb-3 text-center">
              VICTOR MEDEIROS
            </h1>
            <p class="font-mono text-sm tracking-[0.05em] text-text-secondary leading-relaxed m-0">
              Hello! I'm Victor, Computer Scientist from Brazil and Software Developer or Engineer with a decade of experience. This is my portfolio. Some projects are hobbies, some were experiments to learn a new language, and some are tools I built because I needed them myself. I'll also show off my university/undergrad projects, the trial by fire I went through before modern LLM/AI coding agents existed. I vibe coded better interfaces for them and generated better READMEs.
              Hope you enjoy scanning through these or even finding some of my personal projects useful for you.</p>
          </div>
          <div class="w-full h-px bg-accent my-5"></div>
          <ProjectGrid repos={featuredRepos} />
        </div>
      </section>

      <!-- Work -->
      <section id="work" class="flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-[960px]">
          <p class="font-mono text-base tracking-[0.15em] text-accent inline-block bg-surface px-2 py-1 mb-2">// WORK</p>
          <div class="w-full h-px bg-accent my-5"></div>
          <div class="flex flex-col gap-8">

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Fullstack Software Developer - Brainstorm</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Contract Part-time &nbsp;·&nbsp; Remote EST</span>
              <p class="text-sm text-text-secondary mt-1 leading-relaxed">Software developer supporting Build-A-Bear's e-commerce and digital customization experiences with full SFCC integrations.</p>
              <ul class="text-sm text-text-secondary mt-2 leading-relaxed list-disc list-inside">
                <li>Scent Finder Experience — Interactive product discovery flow using React and modern accessibility standards</li>
                <li>Online Bear Personalization Journey — Multistep customization interface with performance optimization</li>
                <li>Collaborating with designers, PMs and QA teams to deliver performant components</li>
              </ul>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Fullstack Software Developer / AI Engineer</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">NovaceneAI &nbsp;·&nbsp; Aug 2025 – Feb 2026</span>
              <p class="text-sm text-text-secondary mt-1 leading-relaxed">Fullstack engineer on business intelligence platform. Reduced AI token usage by 96% (250k→10k per query). Built agentic AI workflows with dynamic tool selection. Contributed to AI-powered digital forensics tool for U.S. State Police.</p>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Fullstack Software Developer</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">OSF Digital &nbsp;·&nbsp; Feb 2020 – Jul 2025</span>
              <p class="text-sm text-text-secondary mt-1 leading-relaxed">Led migration of 52 L'Oréal brand sites (Lancôme, Giorgio Armani, YSL, Kiehl's, Urban Decay, La Roche Posay) to SFRA. Increased accessibility compliance from 52% to 92%. Mentored junior developers and established frontend best practices.</p>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Frontend Developer / Tech Lead</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">OSF Digital &nbsp;·&nbsp; May 2018 – Feb 2020</span>
              <p class="text-sm text-text-secondary mt-1 leading-relaxed">Developed e-commerce websites for L'Oréal brands, AT&T Latam, David Yurman, GIFI France, and Fujitsu Japan using SFCC, ReactJS, VueJS, and NodeJS.</p>
            </div>

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Frontend Developer</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">iFactory Solutions &nbsp;·&nbsp; Aug 2017 – May 2018</span>
              <p class="text-sm text-text-secondary mt-1 leading-relaxed">Developed Hyatt Internal Staff Management Application using AngularJS, NodeJS, and SASS.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Academic -->
      <section id="academic" class="flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-[960px]">
          <p class="font-mono text-base tracking-[0.15em] text-accent inline-block bg-surface px-2 py-1 mb-2">// ACADEMIC</p>
          <div class="w-full h-px bg-accent my-5"></div>
          <div class="flex flex-col gap-8">

            <div class="bg-surface border-l-2 border-accent px-4 py-3.5 flex flex-col gap-1">
              <span class="font-mono text-[0.9rem] font-bold tracking-[0.1em] text-phosphor">Bachelor of Science: Computer Science</span>
              <span class="font-mono text-xs tracking-[0.08em] text-accent">Universidade de Fortaleza - UNIFOR &nbsp;·&nbsp; 2017 – 2021</span>
              <p class="text-sm text-text-secondary mt-1 leading-relaxed">GPA: 9.2/10 — Graduated with Highest CGPA of graduating class</p>
              <p class="text-sm text-text-muted mt-1 leading-relaxed italic">Undergrad Thesis (95/100): Ensemble Comparisons of Machine Learning Models for Forecasting Passenger Flow on Fortaleza's Public Transit System</p>
            </div>

          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section id="certifications" class="flex items-center justify-center py-20 px-6">
        <div class="w-full max-w-[960px]">
          <p class="font-mono text-base tracking-[0.15em] text-accent inline-block bg-surface px-2 py-1 mb-2">// CERTIFICATIONS</p>
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
          <p class="font-mono text-base tracking-[0.15em] text-accent inline-block bg-surface px-2 py-1 mb-2">// CONTACT</p>
          <div class="w-full h-px bg-accent my-5"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            <div class="flex flex-col justify-center gap-6">
              <a 
                href="https://github.com/medeirosvictor" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-phosphor transition-colors duration-[80ms] hover:text-phosphor-bright"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span class="font-mono text-sm tracking-[0.1em]">GITHUB</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/amedeirosvictor/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-phosphor transition-colors duration-[80ms] hover:text-phosphor-bright"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span class="font-mono text-sm tracking-[0.1em]">LINKEDIN</span>
              </a>
              <a 
                href="mailto:victoramedeiros@gmail.com"
                class="flex items-center gap-2 text-phosphor transition-colors duration-[80ms] hover:text-phosphor-bright"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="font-mono text-sm tracking-[0.1em]">EMAIL</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</ErrorBoundary>
