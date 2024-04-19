import nodemailer from 'nodemailer';
import { render } from 'svelte-email';
import { json, type RequestHandler } from '@sveltejs/kit';
import { templates, type TemplatesKey } from '$lib/templates';

// https://ethereal.email/
const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
		user: 'raheem34@ethereal.email',
		pass: 'WGCbZCq5cAtJezqPhU',
	},
});

export const GET: RequestHandler = async ({ params }) => {
	const name = params.template as TemplatesKey;
	const template = templates[name];

	if (!template) return json({ status: 404, body: `Template not found: ${name}` });
	const emailHtml = render({ template });

	const options = {
		from: 'krusilowski@efebia.com',
		to: 'krusilowski@efebia.com',
		subject: `Email Template: ${name}`,
		html: emailHtml,
	};

	const res = transporter.sendMail(options);
	console.log('Message', res);

	return json(emailHtml);
};
