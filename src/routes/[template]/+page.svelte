<script lang="ts">
	import { page } from '$app/stores';
	import templates from '$lib/templates';

	let name = $page!.params.template;
	let current = templates[name];
</script>

<svelte:component this={current} />
