<script lang="ts">
	import { labelStore } from '$lib/stores/languageStore';

	export let label: string | undefined = undefined;
	$: text = $labelStore(label || '');
</script>

{text}
