import ResetPassword from './ResetPassword.svelte';
import Verify from './Verify.svelte';

export const templates = {
	ResetPassword,
	Verify,
};

export type TemplatesKey = keyof typeof templates;

export default templates;
