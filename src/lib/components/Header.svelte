<script lang="ts">
  import AnimationToggle from './ui/AnimationToggle.svelte';

  let {
    animationsEnabled = true,
    onToggle,
  }: {
    animationsEnabled?: boolean;
    onToggle: () => void;
  } = $props();
</script>

<header class="fixed top-0 left-0 w-full z-50 bg-header border-b-2 border-accent grid grid-cols-[1fr_auto_1fr] items-center px-6 h-12">
  <nav class="col-start-2 flex items-center gap-3">
    <a href="#work"     class="font-mono text-[0.8125rem] font-bold tracking-[0.2em] text-phosphor no-underline transition-colors duration-[80ms] hover:text-phosphor-bright">WORK</a>
    <span aria-hidden="true" class="text-accent font-mono text-[0.8125rem] select-none">|</span>
    <a href="#projects" class="font-mono text-[0.8125rem] font-bold tracking-[0.2em] text-phosphor no-underline transition-colors duration-[80ms] hover:text-phosphor-bright">PROJECTS</a>
    <span aria-hidden="true" class="text-accent font-mono text-[0.8125rem] select-none">|</span>
    <a href="#academic" class="font-mono text-[0.8125rem] font-bold tracking-[0.2em] text-phosphor no-underline transition-colors duration-[80ms] hover:text-phosphor-bright">ACADEMIC</a>
    <span aria-hidden="true" class="text-accent font-mono text-[0.8125rem] select-none">|</span>
    <a href="#contact"  class="font-mono text-[0.8125rem] font-bold tracking-[0.2em] text-phosphor no-underline transition-colors duration-[80ms] hover:text-phosphor-bright">CONTACT</a>
  </nav>
  <div class="col-start-3 flex items-center justify-end">
    <AnimationToggle enabled={animationsEnabled} {onToggle} />
  </div>
</header>
