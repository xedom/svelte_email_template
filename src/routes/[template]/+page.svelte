<script lang="ts">
	import { page } from '$app/stores';
	import templates from '$lib/templates';
	import { beforeUpdate, onMount } from 'svelte';

	let name = $page!.params.template;
	let current = templates[name];
	let iframe: HTMLIFrameElement;

	const getPage = async () => {
		const res = await fetch(`api/${name}/html`);
		const html = await res.text();
		return html;
	};

	async function updateIFrame() {
		const html = await getPage();
		// iframe?.contentWindow?.location.reload();
		iframe.contentDocument!.open();
		iframe.contentDocument!.write(html);
		iframe.contentDocument!.close();
	}

	onMount(() => {
		const updateIframe = setInterval(updateIFrame, 1000);

		return () => {
			clearInterval(updateIframe);
		};
	});
</script>

<!-- <svelte:component this={current} /> -->

<iframe bind:this={iframe} src="/api/{name}/html" title="site" class="h-full w-full" />

<style>
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		height: 99.5vh;
		width: 100vw;
	}
	iframe {
		border: none;
		height: 100%;
		width: 100%;
	}
</style>
