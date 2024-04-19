<script lang="ts">
	import '../app.postcss';
	import { templates, type TemplatesKey } from '$lib/templates';
	import { keysOf, valuesOf } from '$lib/utils';
	import Copy from '$lib/icon/Copy.svelte';
	import Notebook from '$lib/icon/Notebook.svelte';

	let current = valuesOf(templates)[0];
	let currentName = keysOf(templates)[0];

	const setCurrent = (name: TemplatesKey) => {
		current = templates[name];
		currentName = name;
	};
	const onCopy = async (name: TemplatesKey) => {
		const template = await fetch(`api/${name}/text`).then((res) => res.text());
		await navigator.clipboard.writeText(template);
	};
</script>

<div class="flex h-full gap-2 bg-neutral-950 p-2">
	<nav class="flex flex-col gap-1">
		{#each keysOf(templates) as name}
			<div class="flex">
				<button
					class="group flex-1 rounded-s bg-neutral-800 p-1 px-4 text-white transition-all duration-300 hover:bg-neutral-900"
					on:click={() => setCurrent(name)}
				>
					<span class="w-full text-white">{name}</span>
				</button>
				<a
					class="group bg-neutral-800 p-2 text-white transition-all duration-300 hover:bg-neutral-900"
					href="api/{name}/text"
					target="_blank"
				>
					<Notebook fill="#ffffff" class="size-4 text-white" />
				</a>
				<button
					class="group rounded-e bg-neutral-800 p-2 text-white transition-all duration-300 hover:bg-neutral-900"
					on:click={() => onCopy(name)}
				>
					<Copy fill="#ffffff" class="size-4 text-white" />
				</button>
			</div>
		{/each}
	</nav>

	<main class="flex-1 overflow-auto rounded bg-neutral-800">
		<!-- <svelte:component this={current} /> -->
		<iframe src="api/{currentName}/html" title="site" class="h-full w-full" />
	</main>
</div>
