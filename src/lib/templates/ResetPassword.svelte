<script lang="ts">
	import { Html, Head, Button, Container, Column, Section, Heading, Hr, Img, Link, Preview, Text } from 'svelte-email';

	export let name = '${name}';
</script>

<Html lang="en">
	<Text>
		RESET, {name}!
	</Text>
	<Hr />
	<Button href="https://example.com">Reset Password</Button>
</Html>
