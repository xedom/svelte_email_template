import ResetPassword from './ResetPassword.svelte';
import ContactRequest from './ContactRequest.svelte';
import Welcome from './Welcome.svelte';
import Verify from './Verify.svelte';
import type { ComponentType } from 'svelte';

export const templates = {
	ContactRequest,
	Welcome,
	ResetPassword,
	Verify,
} as Record<string, ComponentType>;

export type TemplatesKey = keyof typeof templates;

export default templates;
