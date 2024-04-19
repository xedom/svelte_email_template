<script lang="ts">
	import { templates, type TemplatesKey } from '$lib/templates';
	import { keysOf, valuesOf } from '$lib/utils';
	import Copy from '$lib/icon/Copy.svelte';

	let current = valuesOf(templates)[0];

	const setCurrent = (name: TemplatesKey) => (current = templates[name]);
	const onCopy = async (name: TemplatesKey) => {
		const template = await fetch(`api/${name}`).then((res) => res.text());
		await navigator.clipboard.writeText(template);
	};
</script>

<div class="flex bg-slate-400 h-full gap-1 p-1">
	<nav class="flex flex-col gap-1">
		{#each keysOf(templates) as name}
			<div class="flex gap-1">
				<button class="rounded flex-1 p-1 px-4 bg-neutral-800 text-white" on:click={() => setCurrent(name)}>
					{name}
				</button>
				<a class="rounded p-1 px-3 bg-neutral-800 text-white" href="api/{name}" target="_blank">{'>'}</a>
				<button class="rounded p-2 bg-neutral-800 text-white group" on:click={() => onCopy(name)}>
					<Copy fill="#ffffff" class="size-4 text-white group-hover:opacity-70 transition-opacity duration-300" />
				</button>
			</div>
		{/each}
	</nav>

	<main class="flex-1 bg-neutral-800 rounded overflow-auto">
		<svelte:component this={current} />
	</main>
</div>
