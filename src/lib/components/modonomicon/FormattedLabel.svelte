<script lang="ts">
	import { labelStore } from '$lib/stores/languageStore';
	import { HtmlRenderer, Parser } from 'commonmark';

	export let label: string;

	const reader = new Parser();
	const writer = new HtmlRenderer();

	$: rawLabel = $labelStore(label || '');
	$: parsed = reader.parse(rawLabel);
	$: html = writer
		.render(parsed)
		.replaceAll(new RegExp('entry:\/\/([a-z0-9_]+)\/([a-z0-9_]+)', 'g'), '/category/$1/entry/$2');
</script>

<span class="formatted-label inline-block w-full">
	{@html html}
</span>
