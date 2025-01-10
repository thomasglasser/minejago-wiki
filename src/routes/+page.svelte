<script lang="ts">
	import { modInformations } from '$lib/utils/modInformations';
</script>

<div class="flex flex-col justify-center items-start h-full m-2 space-y-2">
	<p>Welcome to the automatically generated Wiki of Minejago!</p>
	<p>
		This Wiki is automatically generated from the Modonomicon Files in the Minejago Repository.
		Therefore, it can be a bit janky, with missing names or unexpected errors.
	</p>
	<p>
		If you encounter any issues, please reach out in the Minejago Discord found <a
			href="/category/mod_news/entry/mod_news"
			rel="noopener noreferrer">here</a
		>
		or submit an issue
		<a href="https://github.com/thomasglasser/minejago-wiki/issues/new" rel="noopener noreferrer"
			>here</a
		>!
	</p>

	<p>You can now select which Addon Mods you want to include in the wiki! Currently available:</p>
	<ul class="list-disc pl-8">
		{#each Object.entries(modInformations) as [id, info]}
			{#if id != 'minejago'}
				<li>
					{#if info.download != null}
						<a href={info.download} rel="noopener noreferrer" target="_blank">
							{info.listName ?? info.name}
						</a>
					{:else}
						<p>
							{info.listName ?? info.name}
						</p>
					{/if}
				</li>
			{/if}
		{/each}
	</ul>
	<p>
		Not all Addons are available for the current version and addon documentation functionality is
		less tested than Ars Nouveau Wiki functionality. Use at your own risk.
	</p>
	<p>
		Direct links to addon pages or refreshing addon pages is currently not supported, since the
		server doesn't know which addons to load.
	</p>
</div>
