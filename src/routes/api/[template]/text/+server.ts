import nodemailer from 'nodemailer';
import { render } from 'svelte-email';
import { json, type RequestHandler } from '@sveltejs/kit';
import { templates, type TemplatesKey } from '$lib/templates';

// https://ethereal.email/
const transporter = nodemailer.createTransport({
	host: '',
	port: 587,
	auth: {
		user: '',
		pass: '',
	},
});

export const GET: RequestHandler = async ({ params }) => {
	const name = params.template as TemplatesKey;
	const template = templates[name];

	// const result = func<TemplatesKey>();
	// console.log('Result', result);

	if (!template) return json({ status: 404, body: `Template not found: ${name}` });
	const emailHtml = render({ template });

	const options = {
		from: '',
		to: '',
		subject: `Email Template: ${name}`,
		html: emailHtml,
	};

	const res = transporter.sendMail(options);
	console.log('Message', await res);

	return new Response(emailHtml, {
		headers: {
			'content-type': 'text/plain',
		},
	});
};
