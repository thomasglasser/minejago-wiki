<script lang="ts">
	import { labelStore } from '$lib/stores/languageStore';
	import { HtmlRenderer, Parser } from 'commonmark';

	export let label: string;

	const reader = new Parser();
	const writer = new HtmlRenderer();

	$: rawLabel = $labelStore(label || '');
	$: parsed = reader.parse(rawLabel);
	$: renderedHtml = writer
		.render(parsed)
		.replaceAll(/entry:\/\/([^\/"'#\s@]+)\/([^\/"'#\s@]+)(?:@[^"'#\s\)]+)?/g, '/category/$1/entry/$2')
		.replaceAll(/category:\/\/([^\/"'#\s@]+)/g, '/category/$1')
		.replaceAll(/book:\/\/[^\/"'#\s@]+/g, '/');
	$: html = renderedHtml.replaceAll(
		/<a\s+(?:[^>]*?\s+)?href=["'](https?:\/\/[^"']+)["']/gi,
		'<a href="$1" target="_blank" rel="noopener noreferrer"'
	);
</script>

<span class="formatted-label inline-block w-full">
	{@html html}
</span>
