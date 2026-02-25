<script lang="ts">
  let { enabled, onToggle }: { enabled: boolean; onToggle: () => void } = $props();
</script>

<button
  onclick={onToggle}
  class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer
         {enabled ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-white/5 text-gray-500 hover:bg-white/10'}"
  aria-label={enabled ? 'Disable animations' : 'Enable animations'}
>
  <span
    class="relative inline-block w-7 h-4 rounded-full transition-colors {enabled ? 'bg-white/25' : 'bg-white/10'}"
  >
    <span
      class="absolute top-0.5 left-0.5 w-3 h-3 rounded-full transition-all
             {enabled ? 'translate-x-3 bg-white' : 'translate-x-0 bg-gray-500'}"
    ></span>
  </span>
  {enabled ? 'Animations on' : 'Animations off'}
</button>
