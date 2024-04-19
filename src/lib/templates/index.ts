import ContactRequest from './ContactRequest.svelte';
import type { ComponentType } from 'svelte';

export const templates = {
	ContactRequest,
} as Record<string, ComponentType>;

export type TemplatesKey = keyof typeof templates;

export default templates;
