<script lang="ts">
	import { templates, type TemplatesKey } from '$lib/templates';
	import { keysOf, valuesOf } from '$lib/utils';
	import Copy from '$lib/icon/Copy.svelte';
	import Notebook from '$lib/icon/Notebook.svelte';

	let current = valuesOf(templates)[0];
	let currentText = '';

	const setCurrent = (name: TemplatesKey) => (current = templates[name]);
	const onCopy = async (name: TemplatesKey) => {
		const template = await fetch(`api/${name}/text`).then((res) => res.text());
		currentText = template;
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
					href="api/{name}"
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
		<svelte:component this={current} />
	</main>
	<!-- <main class="flex-1 bg-neutral-800 rounded overflow-auto">
		<iframe srcdoc={currentText} title="site"></iframe>
	</main> -->
</div>
