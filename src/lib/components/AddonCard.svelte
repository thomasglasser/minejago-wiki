<script lang="ts">
	export let info: any;
</script>

{#if info.download}
	<a href={info.download} target="_blank" rel="noopener noreferrer" class="unstyled block h-full w-full sm:w-72 lg:w-80">
		<div class="glass-panel hover-card rounded-2xl p-6 h-full w-full flex flex-col items-center text-center justify-center space-y-4 cursor-pointer relative overflow-hidden group">
			<!-- Subtle gradient glow effect -->
			<div class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-tertiary-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

			{#if info.icon}
				<img src={info.icon} alt="{info.name} Logo" class="w-16 h-16 object-contain z-10 drop-shadow-md" />
			{/if}
			<h3 class="text-xl font-bold z-10">{info.listName ?? info.name}</h3>

			<span class="z-10 badge variant-soft-tertiary text-xs uppercase tracking-wider font-semibold">Download</span>
		</div>
	</a>
{:else}
	<div class="glass-panel rounded-2xl p-6 h-full w-full sm:w-72 lg:w-80 flex flex-col items-center text-center justify-center space-y-4 opacity-75 grayscale relative">
		{#if info.icon}
			<img src={info.icon} alt="{info.name} Logo" class="w-16 h-16 object-contain drop-shadow-sm" />
		{/if}
		<h3 class="text-xl font-bold text-surface-600 dark:text-surface-300">{info.listName ?? info.name}</h3>
		<span class="badge variant-soft-surface text-xs uppercase tracking-wider font-semibold">Unavailable</span>
	</div>
{/if}
