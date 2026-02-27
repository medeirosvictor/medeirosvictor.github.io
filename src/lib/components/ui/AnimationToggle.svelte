<script lang="ts">
  let { enabled, onToggle }: { enabled: boolean; onToggle: () => void } = $props();
</script>

<button
  onclick={onToggle}
  aria-label={enabled ? 'Disable animations' : 'Enable animations'}
  class="font-mono text-xs font-bold tracking-[0.15em] bg-transparent border px-2.5 py-1 cursor-pointer transition-colors duration-[80ms]
         {enabled
           ? 'text-phosphor border-phosphor hover:text-phosphor-bright hover:border-phosphor-bright'
           : 'text-accent border-accent hover:text-phosphor hover:border-phosphor'}"
>
  {enabled ? '[ ANIM ON ]' : '[ ANIM OFF ]'}
</button>
