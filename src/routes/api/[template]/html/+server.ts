import { render } from 'svelte-email';
import { json, type RequestHandler } from '@sveltejs/kit';
import { templates, type TemplatesKey } from '$lib/templates';

export const GET: RequestHandler = async ({ params }) => {
	const name = params.template as TemplatesKey;
	const template = templates[name];

	if (!template) return json({ status: 404, body: `Template not found: ${name}` });
	const emailHtml = render({ template });

	return new Response(emailHtml, {
		headers: {
			'content-type': 'text/html',
		},
	});
};
