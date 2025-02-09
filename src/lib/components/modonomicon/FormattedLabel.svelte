<script lang="ts">
	import { labelStore } from '$lib/stores/languageStore';
	import { HtmlRenderer, Parser } from 'commonmark';

	export let label: string;

	const reader = new Parser();
	const writer = new HtmlRenderer();
	const parsed = reader.parse($labelStore(label));
	const result = writer.render(parsed);
	export let html = result;
</script>

{@html html}
